import React from "react";

const list = ({ list, modifyElement, delElement, addElement, name }) => {
  return (
    <div>
      <h2>List of {name}</h2>
      {list.map(element => {
        return (
          <div key={element.id}>
            <button type="button" onClick={() => modifyElement(element.id)}>
              Modify
            </button>
            <button type="button" onClick={() => delElement(element.id)}>
              Delete
            </button>
            {element.elementDate}
            {element.elementCustomer}
            {element.elementInvoiceAmount}
            <button type="button" onClick={modifyElement}>
              modify {name}
            </button>
            <button type="button" onClick={delElement}>
              delete {name}
            </button>
          </div>
        );
      })}

      {name === "product" ? (
        <button type="button" onClick={addElement}>
          add Product
        </button>
      ) : null}
    </div>
  );
};

export default list;
