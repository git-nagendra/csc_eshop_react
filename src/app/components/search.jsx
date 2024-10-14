function Search() {
  return (
    <>
      <section style={{ background: "#42987a" }}>
        <div className="container py-5">
          {/* Basic Input */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
            <div className="row gap-0">
            <div className="col-md-3 col-lg-2 ">
               <label htmlFor="basiInput" className="form-label">
                  आवेदन की स्थिति:
                </label>
            </div>
            <div className="col-md-5 mb-2" >
                <input
                  type="text"
                  placeholder="ग्राहक संख्या या मोबाईल नं. डालें"
                  className="form-control inner_shado"
                  id="basiInput"
                />
              </div>
              <div className="col-md-4">
              <div className="login_btn">
                <button className="user_logon login">User login</button>
                <div className="btn_pointer"></div>
              </div>
              </div>
          </div>
            </div>
          </div>
              
              
        </div>
      </section>
    </>
  );
}

export default Search;
