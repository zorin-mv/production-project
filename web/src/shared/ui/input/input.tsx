import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: IInputProps) => {
  const { className, onChange, value, type = 'text', ...restProps } = props;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classes.inputWrapper}>
      <input
        data-testid="input"
        className={classNames(classes.input, [className])}
        onChange={onChangeHandler}
        value={value}
        type={type}
        {...restProps}
      />
    </div>
  );
});
