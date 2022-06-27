import React from "react";

const LocalBodyType = () => {
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
      <div className="menu-name_section">
        <div className="menu-name">
          <p>Location</p>
          <div className="row-end menu-last">
            <p className="link">Back to list</p>
            <div className="line">
              <svg
                width="1"
                height="24"
                viewBox="0 0 1 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499999"
                  y2="24"
                  stroke="#DEE2E6"
                />
              </svg>
            </div>
            <div className="info_icon">
              <img src="/images/icon/info.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="level_section">
        <div className="section-name">
          <p>Local Body Type Details</p>
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
                <th>Country</th>
                <th>Province(In English)</th>
                <th>Province(In Nepali)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td> Nepal</td>
                <td>Bagmati</td>
                <td>Bagmati</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <img src="/images/icon/3dot.svg" className="linkIcon" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="empty_table">
            <img src="/images/table_add2.svg" alt="" />
            <div className="text">
              <h5>No Local Body Type Details</h5>
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
              <p> View</p>
              <select>
                <option>10</option>
              </select>
              <p> per page</p>
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
                <label> Faculties</label>
                <input type="text" />
              </div>
              <div className="form_item">
                <label> Levels</label>
                <select>
                  <option>Select Level</option>
                </select>
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

export default LocalBodyType;
