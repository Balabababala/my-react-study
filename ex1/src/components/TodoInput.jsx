function TodoInput({hiValue,handleChange,ohhoClick,handleKeyDown}){

    return(
        <div>
            <input id="hi" value={hiValue} onChange={handleChange} onKeyDown={handleKeyDown} />
            <button id="ohho" onClick={ohhoClick}>加入</button>
        </div>
    )
}
export default TodoInput