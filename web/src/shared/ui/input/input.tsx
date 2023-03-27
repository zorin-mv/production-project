import { ChangeEventHandler, InputHTMLAttributes, LegacyRef, memo } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  value?: string | number;
  readonly?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputRef?: LegacyRef<HTMLInputElement>;
}

export const Input = memo((props: IInputProps) => {
  const { className, type = 'text', readonly, value, onChange, inputRef, ...restProps } = props;

  return (
    <div className={classes.inputWrapper}>
      <input
        data-testid="input"
        className={classNames(classes.input, [className], { [classes.readonly]: readonly })}
        type={type}
        readOnly={readonly}
        value={value}
        onChange={onChange}
        ref={inputRef}
        {...restProps}
      />
    </div>
  );
});
