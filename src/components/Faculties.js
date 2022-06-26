import React from "react";

const Faculties = () => {
  const showModal = () => {
    const modal = document.querySelector("#modal");
    const overlay = document.querySelector("#overlay");
    document.body.classList.add("model_active");
    modal.classList.add("active");
    overlay.classList.add("active");
  };
  const hideModal = () => {
    const modal = document.querySelector("#modal");
    const overlay = document.querySelector("#overlay");
    document.body.classList.remove("model_active");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  };
  return (
    <>
      <div className="level_section">
        <div className="section-name">
          <p>Faculties Details</p>
        </div>
        <div className="search_bar">
          <form>
            <img src="images/icon/search.svg" alt="" className="searchIcon" />
            <input type="text" placeholder="Search" />
          </form>
          <div className="row-end add_btn">
            <button>
              <img src="images/icon/plus.svg" alt="" />
              Add
            </button>
          </div>
        </div>
        <div className="main-body">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Name</th>
                <th>Abbreviation</th>
                <th>University</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>University with different faculties and levels </td>
                <td>BCA</td>
                <td>PU</td>
                <td>University with different faculties and levels</td>
                <td>
                  <img src="/images/icon/3dot.svg" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="empty_table">
            <img src="/images/table_add3.svg" alt="" />
            <div className="text">
              <h5>No Faculties Details</h5>
              <p>Please add details to show.</p>
            </div>
            <div className="add_btn">
              <button onClick={showModal}>
                <img src="images/icon/plus.svg" alt="" />
                Add
              </button>
            </div>
          </div>
          <div className="table_pagination">
            <div className="list">
              <p>View</p>
              <select>
                <option>10</option>
              </select>
              <p>per page</p>
            </div>

            <div className="button row-end">
              <p>1-10 of 200</p>
              <div className="btn-items">
                <img src="/images/icon/previous.svg" alt="" />
              </div>
              <div className="btn-items mr-16">
                <img src="/images/icon/leftArrow.svg" alt="" />
              </div>
              <div className="page_num">
                <div className="btn-items active">1</div>
                <div className="btn-items ">2</div>
                <div className="btn-items ">3</div>
                <div className="btn-items ">4 </div>
                <div className="btn-items ">...</div>
                <div className="btn-items ">99 </div>
              </div>

              <div className="btn-items ml-16">
                <img src="/images/icon/rightArrow.svg" alt="" />
              </div>
              <div className="btn-items">
                <img src="/images/icon/next.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="overlay" id="overlay" onClick={hideModal}></div>
          <div className="form_modal" id="modal">
            <div className="modal_heading">
              <h3>Add new level</h3>
              <button className="closeBtn row-end" onClick={hideModal}>
                <img src="/images/icon/close.svg" />
              </button>
            </div>
            <form>
              <div className="form_item">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="form_item">
                <label>Abbreviation</label>
                <input type="text" />
              </div>
              <div className="form_item">
                <label>University</label>
                <input type="text" />
              </div>
              <div className="form_item">
                <label>Description</label>
                <textarea />
              </div>
            </form>
            <div className="btns">
              <div className="buttons">
                <button className="transparent" onClick={hideModal}>
                  Cancel
                </button>
                <button className="blue">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faculties;