import React, { useEffect, useRef, useState } from "react";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const rows = [
  {
    id: "stt",
    label: "STT",
    align: "left",
  },
  {
    id: "manv",
    label: "Mã nhân viên",
    align: "left",
  },
  {
    id: "tennv",
    label: "Tên nhân viên",
    align: "left",
  },
  {
    id: "sdt",
    label: "Số điện thoại",
    align: "left",
  },
  {
    id: "bophan",
    label: "Bộ phận",
    align: "left",
  },
];
const columns = [
  {
    id: "10041",
    name: "Lưu Thi Xuan",
    phone: "0359868849",
    department: "Bộ phận cuốn ống",
  },
  {
    id: "10042",
    name: "Trần Thị Thu Thảo",
    phone: "0866431528",
    department: "Bộ phận bóc",
  },
  {
    id: "GD002",
    name: "Kim Ngọc Ánh",
    phone: "0971327992",
    department: "Admin",
  },
  {
    id: "21321",
    name: "Kim Ngọc Ánh",
    phone: "0971327992",
    department: "Admin",
  },
];
export default function Employees() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const dataRef = useRef();

  const handleSearch = () => {
    const inputSearch = value.trim().toLowerCase();
    const search = data.filter((item) => {
      return (
        item.phone.startsWith(inputSearch) ||
        item.name.toLowerCase().startsWith(inputSearch) ||
        item.id.startsWith(inputSearch)
      );
    });
    setData([...search]);
  };

  const handleDelete = (id) => {
    const array = data.filter((item) => item.id !== id);
    setData(array);
  };

  const handleEdit = (id) => {
    const object = data.find((item) => item.id === id);
    dataRef.current = object;
    setShowEdit(!showEdit);
  };
  const handleCallBackEdit = (object, id) => {
    const isData = data.some((item) => item.id === id);
    if (isData) {
      const newData = data.filter((item) => item.id !== id);
      setData([...newData, object]);
    }
  };
  const handleCallBack = (object) => {
    const isData = data.every((item) => item.id !== object.id);
    if (isData) {
      setData([...data, object]);
    }
  };
  const handleReset = () => {
    setValue("");
    setData([...columns]);
  };
  const handleAdd = () => {
    setShow(!show);
  };

  useEffect(() => {
    setData([...columns]);
  }, []);

  return (
    <React.Fragment>
      <div className="max-w-[1200px] m-auto">
        <h5 className="text-2xl  mb-4 mt-4">Danh sách nhân viên</h5>
        <div className="flex items-center justify-between mb-4">
          <input
            className="w-[500px] p-3 border-2 focus:border-blue-700 outline-none
            rounded-lg bg-gray-100 focus:bg-white"
            placeholder="Tìm kiếm bằng số điện thoại , họ tên hoặc mã nhân viên"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div>
            <button
              className="min-w-[100px] p-3 border-2 border-blue-700 rounded-lg text-blue-600 mr-1 hover:bg-blue-600 hover:text-white"
              onClick={handleSearch}
            >
              Tìm kiếm
            </button>
            <button
              className="min-w-[100px] p-3 border-2 border-blue-700 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="min-w-[100px] p-3 border-2 rounded-lg text-white bg-green-600 "
              onClick={handleAdd}
            >
              Thêm mới
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-100 text-lg font-medium shadow-md ">
            <tr>
              {rows.map((row) => (
                <td key={row.id}>{row.label}</td>
              ))}
              <td>Hành động</td>
            </tr>
          </thead>
          <tbody>
            {data.map((column, index) => {
              const value = index + 1;
              return (
                <tr
                  key={column.id}
                  className={value % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td>{index + 1}</td>
                  <td>{column.id}</td>
                  <td className="uppercase">{column.name}</td>
                  <td>{column.phone}</td>
                  <td>{column.department}</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square cursor-pointer p-4"
                      onClick={() => handleEdit(column.id)}
                    />
                    <i
                      className="fa-solid fa-trash-can cursor-pointer"
                      onClick={() => handleDelete(column.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <AddEmployee
        show={show}
        setShow={setShow}
        handleCallBack={handleCallBack}
      />
      <EditEmployee
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        ref={dataRef}
        handleCallBackEdit={handleCallBackEdit}
      />
    </React.Fragment>
  );
}
