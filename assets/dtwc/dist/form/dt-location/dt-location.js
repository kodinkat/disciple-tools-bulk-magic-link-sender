import{r as t,$ as e}from"../../lit-element-69ea4448.js";import{i}from"../dt-multi-select/dt-multi-select.js";import{D as s}from"../dt-tags/dt-tags.js";import"../../directive-de55b00a.js";import"../dt-form-base.js";import"../dt-label/dt-label.js";import"../../icons/dt-spinner.js";import"../../icons/dt-checkmark.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */window.customElements.define("dt-location",class extends s{static get properties(){return{...super.properties,filters:{type:Array}}}static get styles(){return[...super.styles,t`.input-group{display:flex}select{border:1px solid var(--dt-form-border-color,#cacaca);outline:0}`]}_filterOptions(){const t=(this.value||[]).filter((t=>!t.delete)).map((t=>t?.id));if(this.options?.length)this.filteredOptions=(this.options||[]).filter((e=>!t.includes(e.id)&&(!this.query||e.label.toLocaleLowerCase().includes(this.query.toLocaleLowerCase()))));else{this.loading=!0,this.filteredOptions=[];const e=this,i=new CustomEvent("load",{bubbles:!0,detail:{field:this.name,query:this.query,filter:this.shadowRoot.querySelector("select").value,onSuccess:i=>{e.loading=!1,e.filteredOptions=i.filter((e=>!t.includes(e.id)))},onError:t=>{console.warn(t),e.loading=!1}}});this.dispatchEvent(i)}return this.filteredOptions}render(){const t={display:this.open?"block":"none",top:this.containerHeight+"px"};return e`${this.labelTemplate()}<div class="input-group ${this.disabled?"disabled":""}"><div class="field-container" @click="${this._focusInput}" @keydown="${this._focusInput}">${this._renderSelectedOptions()} <input type="text" placeholder="${this.placeholder}" @focusin="${this._inputFocusIn}" @blur="${this._inputFocusOut}" @keydown="${this._inputKeyDown}" @keyup="${this._inputKeyUp}" ?disabled="${this.disabled}"></div><select class="filter-list" ?disabled="${this.disabled}">${function*(t,e){if(void 0!==t){let i=0;for(const s of t)yield e(s,i++)}}(this.filters,(t=>e`<option value="${t.id}">${t.label}</option>`))}</select><ul class="option-list" style="${i(t)}">${this._renderOptions()}</ul>${this.loading?e`<dt-spinner class="icon-overlay"></dt-spinner>`:null} ${this.saved?e`<dt-checkmark class="icon-overlay success"></dt-checkmark>`:null}</div>`}});