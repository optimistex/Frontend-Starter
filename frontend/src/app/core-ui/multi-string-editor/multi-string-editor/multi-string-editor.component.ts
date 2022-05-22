import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validators, Validator, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-string-editor',
  templateUrl: './multi-string-editor.component.html',
  styleUrls: ['./multi-string-editor.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MultiStringEditorComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: MultiStringEditorComponent, multi: true },
  ],
})
export class MultiStringEditorComponent implements ControlValueAccessor, Validator, OnInit {
  @Input() public required = false;
  @Input() public label = 'Line';
  @Input() public placeholder = '';

  public formArray = new FormArray([]);

  public ngOnInit(): void {
    this.formArray.valueChanges.subscribe((value: string[]) => this.onChange(value?.filter(v => !!v) || []));
  }

  public get formArrayControls(): FormControl[] {
    return this.formArray.controls as FormControl[];
  }

  public get errorText(): string {
    const orDeleteText = this.formArray.length > 1 ? ' or delete this field' : '';
    return `Please enter "${this.label.toLowerCase()}" text${orDeleteText}`;
  }

  public addFormControl(afterIndex: number | undefined, value: string = ''): void {
    this.formArray.insert(afterIndex ?? this.formArray.length, new FormControl(value, this.required ? Validators.required : undefined));
  }

  public removeFormControl(index: number): void {
    this.formArray.removeAt(index);
  }

  // ##### ControlValueAccessor #####
  private onChange: (newValue: string[]) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  public writeValue(value: string[]): void {
    this.formArray.clear();
    const data = Array.isArray(value) && value.length > 0 ? value : [''];
    data.forEach(str => this.addFormControl(undefined, str));
  }

  public registerOnChange(fn: (newValue: string[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // ##### Validator #####
  public validate(): ValidationErrors | null {
    return this.formArray.valid ? null : { invalid: true };
  }
}
