let data = [
  {
    stt: 1,
    question:
      "Khái niệm “đường bộ” được hiểu như thế nào là đúng? “Đường bộ” gồm: ",
    answers: [
      "Đường bộ, cầu đường bộ.",
      "Hầm đường bộ, bến phà đường bộ.",
      "Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ khác",
    ],
    correct: 1,
  },
  {
    stt: 2,
    question: "“Vạch kẻ đường” được hiểu như thế nào là đúng?",
    answers: [
      "Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
      "Vạch kẻ đường là vạch chỉ sự phân biệt trí dừng, đỗ trên đường.",
      "Tất cả các ý nêu trên.",
    ],
    correct: 0,
  },
  {
    stt: 3,
    question: "Khái niệm “làn đường” được hiểu như thế nào là đúng?",
    answers: [
      "Là một phần của đường được chia theo chiều ngang của đường, có bề rộng đủ cho xe đỗ an toàn.",
      "Là một phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
      "Cả 02 ý trên.",
    ],
    correct: 0,
  },
  {
    stt: 4,
    question:
      "Khái niệm “phần đường xe chạy” được hiểu như thế nào là đúng?",
    answers: [
      "Là phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại.",
      "Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, dải đất dọc hai bên đường để đảm bảo an toàn giao thông.",
      "Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, các công trình, thiết bị phụ trợ khác và dải đất dọc hai bên đường để đảm bảo an toàn giao thông",
    ],
    correct: 0,
  },
  {
    stt: 5,
    question: "Khái niệm “đường phố” được hiểu như thế nào là đúng?",
    answers: [
      "Đường phố là đường đô thị, gồm lòng đường và hè phố.",
      "Đường phố là đường bộ ngoài đô thị có lòng đường đủ rộng cho các phương tiện giao thông qua lại",
      "Cả 02 ý nêu trên.",
    ],
    correct: 0,
  },
  {
    stt: 6,
    question: "Khái niệm “dải phân cách” được hiểu như thế nào là đúng?",
    answers: [
      "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
      "Là bộ phận của đường để xác định ranh giới của đất dành cho người đi bộ theo chiều ngang của đường.",
      "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép.",
    ],
    correct: 1,
  },
  {
    stt: 7,
    question:
      "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
    answers: [
      "Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
      "Vạch kẻ đường là vạch chỉ sự phân biệt trí dừng, đỗ trên đường.",
      "Tất cả các ý nêu trên.",
    ],
    correct: 0,
  },
  {
    stt: 8,
    question: "Khái niệm “làn đường” được hiểu như thế nào là đúng?",
    answers: ["Bị nghiêm cấm.", "Không bị nghiêm cấm."],
    correct: 0,
  },
  {
    stt: 9,
    question:
      "Người điều khiển xe mô tô, xe gắn máy trên đường mà trong máu có nồng độ cồn vượt quá bao nhiêu thì bị cấm?",
    answers: [
      "Nồng độ cồn vượt quá 50 miligam/100 mililit máu.",
      "Nồng độ cồn vượt quá 40 miligam/100 mililit máu.",
      "Nồng độ cồn vượt quá 30 miligam/100 mililit máu.",
    ],
    correct: 0,
  },
  {
    stt: 10,
    question:
      "Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có bị nghiêm cấm hay không?",
    answers: [
      "Không bị nghiêm cấm.",
      "Bị nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp.",
    ],
    correct: 1,
  },
  {
    stt: 11,
    question:
      "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
    answers: [
      "Không bị nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp cụ thể.",
      "Bị nghiêm cấm.",
    ],
    correct: 2,
  },
  {
    stt: 12,
    question:
      "ác xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    answers: [
      "Xe của bạn, mô tô, xe con.",
      "Xe con, xe của bạn, mô tô.",
      "Mô tô, xe con, xe của bạn.",
    ],
    correct: 2,
    image: require("./image/anh11.jpg"),
  },
  {
    stt: 13,
    question:
      " Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
    answers: [" Biển 1.", "Biển 1 và 3.", "Biển 3.", "Cả ba biển."],
    correct: 2,
    image: require("./image/anh2.jpg"),
  },
  {
    stt: 14,
    question: "  Biển nào báo hiệu “Hết đoạn đường ưu tiên”?",
    answers: ["Biển 3.", "Biển 1.", "Biển 2."],
    correct: 0,
    image: require("./image/anh4.jpg"),
  },
  {
    stt: 15,
    question:
      " Biển nào báo hiệu “Đường giao nhau” của các tuyến đường cùng cấp?",
    answers: ["Biển 1.", "Biển 3.", " Biển 2."],
    correct: 0,
    image: require("./image/anh5.jpg"),
  },
  {
    stt: 16,
    question: "Biển nào xe mô tô hai bánh được đi vào?",
    answers: ["Biển 1 và 2.", "Biển 1 và 3.", "Biển 2 và 3."],
    correct: 1,
    image: require("./image/anh6.jpg"),
  },
  {
    stt: 17,
    question: "Biển nào xe mô tô hai bánh không được đi vào?",
    answers: ["Biển 1.", "Biển 2.", "Biển 3."],
    correct: 1,
    image: require("./image/anh6.jpg"),
  },
  {
    stt: 18,
    question:
      " Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
    answers: [" Biển 1.", "Biển 2.", "Cả ba biển."],
    correct: 1,
    image: require("./image/anh7.jpg"),
  },
  {
    stt: 19,
    question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Xe tải, xe lam, xe con, mô tô.",
      "Xe tải, mô tô, xe lam, xe con.",
      "Xe lam, xe tải, xe con, mô tô.",
      " Mô tô, xe lam, xe tải, xe con.",
    ],
    correct: 2,
    image: require("./image/anh8.jpg"),
  },
  {
    stt: 20,
    question: " Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Xe khách, xe tải, mô tô, xe con",
      "Xe tải, mô tô, xe lam, xe con.",
      "Xe lam, xe tải, xe con, mô tô.",
      "Mô tô, xe lam, xe tải, xe con.",
    ],
    correct: 2,
    image: require("./image/anh2.jpg"),
  },
];

export default data;