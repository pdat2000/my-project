import React, { forwardRef, useState } from "react";

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
export default forwardRef(function EditEmployee(
  { showEdit, setShowEdit, handleCallBackEdit },
  ref
) {
  const [object, setObject] = useState({ ...ref.current });
  const handleCancel = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCallBackEdit(object, ref.current.id);
    setShowEdit(!showEdit);
  };
  return (
    <div>
      {showEdit && (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[600px]">
            <h3 className="text-xl">Sửa nhân viên</h3>
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
                      setObject({ ...ref.current, id: e.target.value });
                    }}
                    defaultValue={ref.current.id}
                    disabled
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
                      setObject({ ...ref.current, name: e.target.value });
                    }}
                    defaultValue={ref.current.name}
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
                      setObject({ ...ref.current, phone: e.target.value });
                    }}
                    defaultValue={ref.current.phone}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="manv">Bộ phận</label>
                  <select
                    className="p-3 border-2 focus:border-blue-700 outline-none
        rounded-lg bg-gray-100 focus:bg-white w-[210px]"
                    placeholder="Bộ phận"
                    onChange={(e) => {
                      setObject({
                        ...ref.current,
                        department: e.target.value || dataOption[0].name,
                      });
                    }}
                    defaultValue={ref.current.department}
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
                    Sửa
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
});
