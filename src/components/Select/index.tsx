import { useCallback, useEffect, useRef, useState } from 'react';
import tw from 'twin.macro';
import styles from './select.module.css';

export type SelectOption = {
  label: string;
  value: string;
  selected?: boolean;
  group?: string;
};

type MultipleSelectProps = {
  multiple: true;
  defaultValue: string[];
};

type SingleSelectProps = {
  multiple?: false;
  defaultValue: string[];
};

type SelectProps = {
  name: string;
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const Container = tw.div`flex relative min-h-fit border-2 border-gray-400 align-middle items-center gap-2 p-0.5 rounded outline-0 focus:border-blue-500`;
const Chips = tw.button`flex align-middle border-2 border-gray-300 rounded-lg py-0.5 px-1 gap-1 cursor-pointer bg-blend-soft-light outline-0 hover:(border-green-700 bg-green-600 bg-opacity-25)`;

export function Select({ name, multiple, options, defaultValue }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] =
    useState<string[]>(defaultValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  function clearOptions(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOptions([]);
  }

  useEffect(() => {
    setSelectedOptions(defaultValue);
  }, [defaultValue]);

  const handleRemove = useCallback(
    (option: SelectOption) => {
      if (multiple) {
        setSelectedOptions(prev => {
          return [...prev.filter(v => v !== option.value)];
        });
        return;
      }
      setSelectedOptions([]);
    },
    [multiple]
  );

  const handleSelect = useCallback(
    (option: SelectOption) => {
      if (selectedOptions.includes(option.value)) {
        handleRemove(option);
        return;
      }
      if (multiple) {
        setSelectedOptions(prev => [...prev, option.value]);
        return;
      }

      setSelectedOptions([option.value]);
    },
    [selectedOptions, multiple, handleRemove]
  );

  const scrollToListOption = useCallback(
    (index: number) => {
      setTimeout(() => {
        listRef?.current?.children[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }, 200);
    },
    [listRef]
  );

  useEffect(() => {
    const containerNode = containerRef.current;
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          e.preventDefault();
          if (isOpen) handleSelect(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          console.log('test');
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
            scrollToListOption(newValue);
          }
          break;
        }
        case 'Escape':
          handleClose();
          break;
      }
    };
    containerNode?.addEventListener('keydown', handler);

    return () => {
      containerNode?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, handleSelect, options, scrollToListOption]);

  const handleClose = () => {
    setIsOpen(false);
    setHighlightedIndex(0);
  };

  const handleClickChips = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    const optionValue = e.target.dataset.value;
    const index = options.findIndex(v => v.value === optionValue);
    setHighlightedIndex(index);
    scrollToListOption(index);
  };

  const toggleList = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Container
      ref={containerRef}
      onBlur={handleClose}
      onClick={toggleList}
      tabIndex={0}
    >
      <span tw="grow flex gap-1 flex-wrap">
        {options
          .filter(option => selectedOptions.includes(option.value))
          .map(option => (
            <Chips
              key={option.value}
              data-value={option.value}
              onClick={handleClickChips}
              type="button"
            >
              {option.label}
              <span
                className={styles['remove-btn']}
                onClick={() => {
                  handleRemove(option);
                }}
              >
                &times;
              </span>
            </Chips>
          ))}
      </span>
      <button
        onClick={clearOptions}
        type="button"
        className={styles['clear-btn']}
      >
        &times;
      </button>
      <div tw="bg-gray-400 self-stretch [width: 0.1rem]"></div>
      <div tw="cursor-pointer translate-x-[-25%] [border-width: 0.25em] border-transparent border-t-gray-400"></div>
      <ul
        ref={listRef}
        className={`${styles.options} ${isOpen ? styles.show : ''}`}
      >
        {options.map((option, index) => (
          <li
            onClick={e => {
              e.stopPropagation();
              handleSelect(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`${styles.option} ${
              selectedOptions.includes(option.value) ? styles.selected : ''
            } ${index === highlightedIndex ? styles.highlighted : ''}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <input
        tw="hidden"
        name={name}
        value={selectedOptions.join(',')}
        multiple={multiple}
        disabled
        aria-readonly
      ></input>
    </Container>
  );
}

export default Select;
