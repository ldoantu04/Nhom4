import React, { useState } from "react";

const vouchers = [
  {
    id: 1,
    title: "Giảm 50% giá trị sản phẩm",
    minOrder: "0đ",
    expiry: "30/6/2025",
  },
  {
    id: 2,
    title: "Giảm 20% giá trị sản phẩm",
    minOrder: "100đ",
    expiry: "15/6/2025",
  },
  {
    id: 3,
    title: "Giảm 170k",
    minOrder: "0đ",
    expiry: "30/6/2025",
  },
  {
    id: 4,
    title: "Giảm 15%, giảm tối đa 150k",
    minOrder: "0đ",
    expiry: "30/6/2025",
  },
];

const WishList = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div className="max-w-md mx-auto bg-white p-4 text-sm">
      {/* Header line with back icon and title */}
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <img
          src="assets/back.png"
          alt="back"
          className="w-6 h-6 cursor-pointer"
        />
        <h2 className="text-base font-medium text-center flex-1 -ml-6">
          Chọn Voucher ưu đãi
        </h2>
      </div>

      <div className="space-y-2 bg-[#F2EFEF] p-2">
        {vouchers.map((v) => (
          <div key={v.id} className="flex items-center">
            {/* Moved wishlist icon outside the gray box */}
            <img
              src="/assets/wishlist.png"
              alt="voucher"
              className="h-21 w-auto"
            />

            {/* Main box with light gray background */}
            <div
              onClick={() => setSelectedId(v.id)}
              className={`flex justify-between items-center p-3 flex-1 cursor-pointer ${
                selectedId === v.id ? "bg-gray-300" : "bg-[#D9D9D9]"
              }`}
            >
              <div>
                <p className="font-medium">{v.title}</p>
                <p className="text-gray-700">Đơn tối thiểu {v.minOrder}</p>
                <p className="text-gray-700">HSD: {v.expiry}</p>
              </div>
              <input
                type="radio"
                checked={selectedId === v.id}
                onChange={() => setSelectedId(v.id)}
                className="form-radio text-red-500 ml-2"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 mt-4 p-2 text-xs flex items-center gap-2">
        <img src="/assets/tick.png" alt="icon tik" />
        <div>
          <p>Voucher đã được chọn.</p>
          <p>
            Đã áp dụng ưu đãi{" "}
            <span className="text-red-500 font-semibold">
              {vouchers
                .find((v) => v.id === selectedId)
                ?.title?.match(/\d+%/g) ?? ""}
            </span>
          </p>
        </div>
      </div>

      <button className="bg-red-600 text-white w-full py-2 rounded mt-4 text-sm font-semibold">
        Đồng ý
      </button>
    </div>
  );
};

export default WishList;
