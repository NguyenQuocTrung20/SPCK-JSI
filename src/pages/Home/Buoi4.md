Trong buổi 4 : học về 1 store được gọi là global store

## 1. Global store
- Là 1 store được tạo ra ở trong thư mục src nhằm phục vụ mục đích cung cấp các phương thức: state, các hàm cập nhật
lại state, hàm xử lí logic khác mà không cần sử dụng đến hook useState mà ta vẫn có thể cập nhật lại được state( trạng thái) của component

- Có nhiều cách để tạo ra 1 global store
    * Cách 1: sử dụng thư viện redux
    * Cách 2: sử dụng thư viện mobx
    * Cách 3: sử dụng thư viện recoil
    * Cách 4: sử dụng thư viện zustand

## đối với zustand store thì mỗi file store sẽ chứa các thành phần thành phần chính :

- 1 state // state
- 1 hàm setState   // action
- 1 hàm xử lí logic khác
