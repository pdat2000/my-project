import React, { useState } from "react";

const dataOption = [
  {
    id: "Bộ phận cuốn ống",
    name: "Bộ phận cuốn ống",
  },
  {
    id: "Bộ phận bóc",
    name: "Bộ phận bóc",
  },
  {
    id: "Admin",
    name: "Admin",
  },
];
function AddEmployee({ show, setShow, handleCallBack }) {
  const [object, setObject] = useState({});
  const handleCancel = () => {
    setShow(!show);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(!show);
    handleCallBack(object);
  };
  return (
    <div>
      {show && (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[600px]">
            <h3 className="text-xl">Thêm nhân viên</h3>
            <div className="p-3">
              <form
                className="flex gap-2 flex-wrap justify-center"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="manv">Mã nhân viên</label>
                  <input
                    id="manv"
                    className="p-3 border-2 focus:border-blue-700 outline-none
            rounded-lg bg-gray-100 focus:bg-white"
                    placeholder="Mã nhân viên"
                    required
                    onChange={(e) => {
                      setObject({ ...object, id: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="tennv">Tên nhân viên</label>
                  <input
                    id="tennv"
                    className="p-3 border-2 focus:border-blue-700 outline-none
            rounded-lg bg-gray-100 focus:bg-white"
                    placeholder="Tên nhân viên"
                    required
                    onChange={(e) => {
                      setObject({ ...object, name: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    id="phone"
                    className="p-3 border-2 focus:border-blue-700 outline-none
            rounded-lg bg-gray-100 focus:bg-white"
                    placeholder="Số điện thoại"
                    required
                    onChange={(e) => {
                      setObject({ ...object, phone: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Bộ phận</label>
                  <select
                    className="p-3 border-2 focus:border-blue-700 outline-none
            rounded-lg bg-gray-100 focus:bg-white w-[210px]"
                    placeholder="Bộ phận"
                    onChange={(e) => {
                      setObject({
                        ...object,
                        department: e.target.value || dataOption[0].name,
                      });
                    }}
                  >
                    {dataOption.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-center items-center w-100 border-t p-3 gap-2">
                  <button
                    className="min-w-[100px] p-3 border-2 border-blue-700 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white"
                    type="submit"
                  >
                    Thêm
                  </button>
                  <button
                    className="min-w-[100px] p-3 border-2 border-blue-700 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={handleCancel}
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AddEmployee;
