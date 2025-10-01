import React from "react";

export default function Form() {
  return (
    <div>
      <form action="">
        <p className="text-2xl font-bold">회원가입</p>
        <p className="">이메일</p>
        <input
          type="email"
          placeholder="이메일"
          className="border-2 m-1"
          required
        />
        <br />
        <p>비밀번호</p>
        <input
          type="password"
          placeholder="비밀번호"
          className="border-2 m-1"
          required
        />
        <br />
        <p>비밀번호 확인</p>
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="border-2 m-1"
          required
        />
        <br />

        <div>
          <p>레벨</p>
          <input type="radio" id="신입" name="레벨" />
          <label htmlFor="신입">신입</label>
          <input type="radio" id="주니어" name="레벨" />
          <label htmlFor="주니어">주니어</label>
          <input type="radio" id="시니어" name="레벨" />
          <label htmlFor="시니어">시니어</label>
        </div>

        <br />
        <button
          type="submit"
          className="text-center bg-blue-500 text-white p-2"
          style={{ paddingRight: "110px" }}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
