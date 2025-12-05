import React, { useState } from "react";
import Swal from "sweetalert2";

export default function LandingPage() {
  const [form, setForm] = useState({
    business_name: "",
    instagram_account: "",
    full_name: "",
    mobile_code: "+62",
    mobile_number: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      Swal.fire({
        title: "Success!",
        text: "Your data has been submitted.",
        icon: "success",
        confirmButtonColor: "#801414",
        confirmButtonText: "OK",
      });

      setForm({
        business_name: "",
        instagram_account: "",
        full_name: "",
        mobile_code: "+62",
        mobile_number: "",
        email: "",
      });

      setCountryCode("+62");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Submission failed. Please try again.",
        icon: "error",
        confirmButtonColor: "#801414",
      });
    }
  };

  const [lang, setLang] = useState("ENG");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ENG" ? "KOR" : "ENG"));
  };

  const [countryCode, setCountryCode] = useState("+62");
  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
    handleChange(e);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <div className="mx-auto py-12 px-30">
        <div className="relative w-full mb-12">
          {/* Logo */}
          <div className="flex justify-center">
            <img className="w-65" src="Logotype.svg" alt="Logo Glamore" />
          </div>

          {/* Language Button */}
          <button
            onClick={toggleLanguage}
            className="absolute top-1/2 -translate-y-1/2 right-0 
               flex items-center gap-1 bg-white border border-gray-300 text-[#801414]
               px-2.5 py-2 rounded-full text-xs shadow-sm hover:bg-gray-50 transition"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#FFE1D5" />
              <path
                d="M19.1824 12.681C19.8137 12.6798 20.445 12.6786 21.0763 12.6778C21.6817 11.774 22.5935 11.1202 23.4864 10.4984C23.4416 10.4067 23.3952 10.3153 23.3467 10.2248C22.3368 8.34291 20.8676 6.92414 18.937 5.97802C17.7039 5.37414 16.3966 5.04866 15.0182 5.01436C14.9903 5.01356 14.9629 5.00519 14.9354 5H14.6254C14.5774 5.00479 14.5298 5.01276 14.4813 5.01396C12.5641 5.06222 10.8192 5.63939 9.24944 6.71792C7.45247 7.95322 6.19677 9.60014 5.49566 11.6527C5.26155 12.338 5.11625 13.0424 5.05449 13.7631C5.04238 13.9059 5.03068 14.0491 5.01776 14.1919C5.01615 14.2099 5.00605 14.2266 5 14.2442V14.933C5.01171 15.0076 5.02987 15.0822 5.03431 15.1572C5.05772 15.5844 5.11261 16.008 5.19899 16.4268C5.59011 18.3178 6.47245 19.9548 7.8444 21.3249C9.22442 22.7034 10.8583 23.5972 12.7445 23.9925C12.9427 23.594 13.151 23.1888 13.3697 22.7775C13.626 22.2961 13.8836 21.8306 14.1411 21.3815C13.5437 20.4115 13.1643 19.4693 12.9294 18.5934C12.9169 18.5475 12.9051 18.5013 12.8934 18.4554H15.0605C15.201 18.1882 15.3604 17.9301 15.5308 17.6776C15.8367 17.2241 16.16 16.7746 16.6525 16.5177C16.6533 16.5169 16.6541 16.5161 16.6553 16.5157C16.0103 16.5157 15.3657 16.5157 14.7207 16.5157C14.7207 16.5133 14.7207 16.5105 14.7207 16.5081C14.3304 16.5081 13.9401 16.5073 13.5497 16.5081C13.2692 16.5089 12.9887 16.5129 12.7078 16.5153C12.669 16.5153 12.6303 16.5169 12.5915 16.5137C12.4793 16.5045 12.4377 16.4675 12.42 16.3562C12.4042 16.2588 12.3921 16.1603 12.3812 16.0622C12.313 15.4659 12.288 14.8676 12.3029 14.2673C12.3138 13.8305 12.3465 13.3954 12.4063 12.9622C12.4139 12.9056 12.4155 12.8477 12.4248 12.7911C12.4381 12.7097 12.4716 12.681 12.5544 12.6778C12.5996 12.6762 12.6448 12.6794 12.69 12.6794C13.9449 12.6794 15.2002 12.6794 16.4551 12.6794C16.5746 12.6794 16.6936 12.6766 16.8131 12.6758C16.9613 12.675 17.0077 12.7161 17.0279 12.8625C17.1469 13.7244 17.176 14.59 17.1183 15.4575C17.0993 15.7427 17.0614 16.0267 17.0311 16.3111C17.0731 16.2963 17.1154 16.2824 17.1598 16.2716C17.6955 16.1416 18.1407 16.3075 18.5051 16.6118C18.6573 16.6904 18.8018 16.7861 18.9427 16.8918C18.9608 16.7917 18.9713 16.7072 18.9774 16.6457C18.9826 16.619 18.9871 16.5895 18.9895 16.5572C18.9911 16.5369 18.9915 16.5177 18.9915 16.4998C18.9903 16.4762 18.9883 16.4607 18.9891 16.4455C19.0097 16.1113 19.0323 15.7774 19.0517 15.4432C19.0771 14.9972 19.0936 14.5513 19.0678 14.1046C19.042 13.6558 19.0149 13.2071 18.9891 12.758C18.9879 12.7372 18.9923 12.7157 18.9943 12.6898C19.0609 12.6858 19.1219 12.6794 19.1828 12.679L19.1824 12.681ZM12.133 7.38563C12.1112 7.44067 12.0975 7.47817 12.0817 7.51526C11.8379 8.09482 11.5933 8.67437 11.3504 9.25433C11.1832 9.65319 11.0803 10.0716 10.9645 10.486C10.9483 10.5443 10.933 10.6033 10.9132 10.6603C10.8862 10.7377 10.8535 10.7612 10.7699 10.762C10.6375 10.7632 10.5051 10.7612 10.3732 10.7612C9.65025 10.7608 8.92735 10.7605 8.20444 10.7593C8.15722 10.7593 8.10999 10.7521 8.04218 10.7465C9.01816 9.14823 10.3271 7.98792 12.133 7.38563ZM7.82785 16.5125C7.69869 16.5125 7.56993 16.5149 7.44077 16.5161C7.41816 16.5161 7.39556 16.5165 7.37296 16.5153C7.24137 16.5061 7.19173 16.4722 7.16509 16.3438C7.11705 16.1129 7.07064 15.8815 7.03713 15.6482C6.97175 15.1959 6.95439 14.7408 6.97215 14.2837C6.99152 13.7914 7.06135 13.3064 7.17195 12.8266C7.20061 12.7013 7.2329 12.6778 7.36731 12.6782C8.23875 12.6786 9.11019 12.6794 9.98163 12.6806C10.1076 12.6806 10.2335 12.6818 10.359 12.685C10.3998 12.6858 10.4402 12.6942 10.493 12.7001C10.405 13.3431 10.3578 13.9717 10.3578 14.6035C10.3578 15.2354 10.4046 15.864 10.4951 16.4994C10.3978 16.5037 10.3082 16.5117 10.219 16.5117C9.4218 16.5125 8.62462 16.5117 7.82745 16.5125H7.82785ZM12.0394 21.7764C11.7948 21.7381 11.5683 21.6472 11.3479 21.5399C10.8773 21.3101 10.4478 21.0169 10.0385 20.6947C9.48678 20.2603 8.9774 19.7828 8.54309 19.2308C8.38446 19.029 8.24036 18.818 8.12896 18.5862C8.10999 18.5464 8.09263 18.5061 8.06922 18.4538C8.14188 18.4482 8.20202 18.4399 8.26256 18.4399C9.06579 18.4379 9.86902 18.4371 10.6723 18.4363C10.845 18.4363 10.9007 18.4777 10.9435 18.6461C11.0533 19.0757 11.1808 19.4996 11.3298 19.9173C11.5352 20.492 11.7786 21.05 12.0664 21.5893C12.0918 21.6372 12.1144 21.6866 12.1378 21.7357C12.1431 21.7469 12.1455 21.7596 12.154 21.7864C12.1104 21.7832 12.0741 21.7828 12.0385 21.7772L12.0394 21.7764ZM12.8955 10.7405C13.0747 10.0596 13.3237 9.41028 13.6317 8.78246C13.9389 8.15584 14.3029 7.56313 14.7219 6.98397C15.5635 8.1359 16.1802 9.37438 16.5544 10.7401H12.8955V10.7405ZM18.5548 10.7381C18.4075 10.1594 18.2331 9.58379 18.0163 9.02179C17.8004 8.46098 17.5489 7.91652 17.268 7.38124C19.0803 7.96957 20.4155 9.12908 21.3911 10.7254C21.314 10.7497 18.8947 10.7605 18.5544 10.7381H18.5548Z"
                fill="#801414"
              />
              <path
                d="M23.395 16.183C23.4782 17.0314 23.6905 17.8148 24.2136 18.5017C24.2427 18.4777 24.2628 18.4638 24.2798 18.4466C24.5337 18.1889 24.7149 17.8934 24.765 17.5308C24.7791 17.4267 24.7779 17.3206 24.7932 17.2169C24.8425 16.8843 25.1339 16.6226 25.4741 16.5999C25.8189 16.5767 26.1454 16.7945 26.2366 17.1144C26.2911 17.3047 26.2863 17.5005 26.2572 17.694C26.1724 18.258 25.9537 18.7653 25.588 19.2089C25.5416 19.2651 25.4992 19.3245 25.4467 19.3935C25.5496 19.4071 25.638 19.4211 25.7268 19.4302C25.9226 19.4506 26.1183 19.4681 26.3141 19.4881C26.6269 19.52 26.8836 19.7242 26.9684 20.0074C27.0996 20.4469 26.8134 20.8833 26.3549 20.9455C26.1736 20.9703 25.9936 20.9527 25.814 20.9356C25.2376 20.8809 24.698 20.7098 24.1979 20.4206C24.1099 20.37 24.0259 20.3644 23.9315 20.4051C23.4112 20.628 22.8683 20.7744 22.3085 20.8618C21.9222 20.922 21.5327 20.9503 21.1424 20.9555C20.765 20.9603 20.4558 20.6751 20.4078 20.2886C20.3646 19.9416 20.6104 19.5914 20.9688 19.5108C21.1056 19.4801 21.2501 19.4801 21.3918 19.4721C21.8471 19.4462 22.2963 19.3828 22.7359 19.2607C22.7819 19.2479 22.8263 19.2304 22.8828 19.2112C22.2568 18.2946 21.9892 17.27 21.8883 16.1842C21.8491 16.1842 21.8176 16.1842 21.7858 16.1842C21.5726 16.1838 21.3595 16.189 21.1468 16.1814C20.7315 16.1671 20.4267 15.8787 20.4025 15.4699C20.3803 15.0917 20.6863 14.7659 21.0406 14.7236C21.098 14.7168 21.1565 14.7144 21.2146 14.7144C21.944 14.7124 22.6733 14.7108 23.4027 14.7104C24.2511 14.7096 25.0996 14.71 25.948 14.7104C26.0707 14.7104 26.1938 14.7104 26.3153 14.7208C26.7238 14.7563 27.0027 15.0618 26.9979 15.4619C26.9934 15.8468 26.6939 16.1559 26.2955 16.1783C26.1123 16.1886 25.9278 16.1866 25.7438 16.1866C25.1662 16.1874 24.5882 16.1874 24.0106 16.1866C23.8427 16.1866 23.6752 16.1842 23.5072 16.183C23.4754 16.183 23.4439 16.183 23.3938 16.183H23.395Z"
                fill="#801414"
              />
              <path
                d="M17.5134 24.5544C16.9875 24.5544 16.4612 24.5544 15.9352 24.5544C15.9029 24.5544 15.8706 24.5552 15.8383 24.5564C15.7673 24.5596 15.716 24.5939 15.6834 24.6549C15.6652 24.6884 15.6507 24.7243 15.6349 24.759C15.5146 25.0235 15.3972 25.2895 15.2741 25.5528C15.174 25.7666 15.0117 25.917 14.7776 25.9748C14.4975 26.0442 14.2509 25.9676 14.0515 25.7666C13.8513 25.5648 13.8044 25.3187 13.8823 25.0494C13.9009 24.9856 13.9288 24.9238 13.9562 24.8627C14.8079 22.9665 15.6603 21.0703 16.5124 19.1741C16.6 18.979 16.6832 18.7816 16.7756 18.5886C16.8224 18.4912 16.8773 18.3959 16.9419 18.3093C17.2135 17.9452 17.8569 17.9448 18.1209 18.3612C18.1516 18.4099 18.1806 18.4601 18.204 18.512C19.1522 20.6172 20.0995 22.7224 21.046 24.828C21.0787 24.9006 21.111 24.9744 21.1348 25.0502C21.2289 25.349 21.1215 25.6553 20.8624 25.8348C20.7009 25.9469 20.5181 25.9951 20.3235 25.9915C20.1576 25.9884 20.0208 25.9118 19.9058 25.7957C19.8234 25.7123 19.7633 25.615 19.716 25.5089C19.6002 25.2493 19.4848 24.9896 19.3689 24.7303C19.3613 24.7128 19.354 24.6948 19.3463 24.6773C19.3104 24.5959 19.2499 24.5532 19.1578 24.554C18.9867 24.5552 18.8155 24.554 18.6448 24.554C18.267 24.554 17.8896 24.554 17.5118 24.554L17.5134 24.5544ZM16.3998 23.0611H18.6093C18.5491 22.8744 17.5485 20.6726 17.4981 20.618C17.1324 21.4313 16.7679 22.2418 16.3998 23.0611Z"
                fill="#801414"
              />
              <path
                d="M22.9639 13.4285C22.9687 13.2159 23.0398 13.05 23.1931 12.9244C23.3719 12.7784 23.5487 12.6288 23.736 12.494C23.8361 12.4222 23.9556 12.3751 24.0698 12.3237C24.2083 12.2614 24.3508 12.267 24.4948 12.3101C24.8803 12.4254 25.1043 12.7919 25.024 13.1816C24.9954 13.3204 24.9247 13.4357 24.8157 13.5286C24.5881 13.7225 24.3455 13.896 24.0961 14.0611C23.7534 14.2881 23.3384 14.1632 23.1233 13.8824C23.0167 13.7432 22.9639 13.5853 22.9639 13.4281V13.4285Z"
                fill="#801414"
              />
            </svg>

            {lang}
          </button>
        </div>

        <p className="text-center font-normal text-gray-500 text-xl mb-12">
          {lang === "ENG"
            ? "We’re polishing the final touches on your favorite beauty and wellness business’ assistant."
            : "뷰티·웰니스 샵 운영, 이 앱 하나로 끝"}
        </p>

        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {[
            {
              title: lang === "ENG" ? "Online Booking" : "온라인 예약",
              desc:
                lang === "ENG"
                  ? "24/7 appointments, service catalog, and calendar sync."
                  : "24시간 예약 접수, 서비스 카탈로그, 캘린더 자동 동기화",
            },
            {
              title: lang === "ENG" ? "Client Management" : "고객 관리",
              desc:
                lang === "ENG"
                  ? "Past visits, notes, preferences, and purchase history."
                  : "방문 이력, 시술·메모, 선호도, 구매 기록까지 한눈에",
            },
            {
              title: lang === "ENG" ? "Integrated POS" : "통합 POS",
              desc:
                lang === "ENG"
                  ? "Fast checkout, receipts, and stock control."
                  : "빠른 결제 & 영수증 발송, 재고 관리까지 깔끔하게",
            },
            {
              title: lang === "ENG" ? "Team Management" : "팀 관리",
              desc:
                lang === "ENG"
                  ? "Assign services, manage shift, and track performance."
                  : "서비스 배정, 근무 교대/스케줄, 성과 추적",
            },
            {
              title: lang === "ENG" ? "Marketing Tools" : "마케팅 도구",
              desc:
                lang === "ENG"
                  ? "Membership, Offer & Discount, and Package."
                  : "멤버십, 프로모션/할인, 패키지 상품으로 재방문 업",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 w-57">
              <div className="relative w-5 h-5 mr-2 flex-shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16.9016"
                    cy="16.9699"
                    r="14.9699"
                    fill="#801414"
                  />
                  <g filter="url(#filter0_d_17_393)">
                    <path
                      d="M23.8236 12.5557L14.9705 21.4088L10.9463 17.3847"
                      stroke="#FFFBF6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_17_393"
                      x="3.72656"
                      y="7.72656"
                      width="27.3164"
                      height="27.3159"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_17_393"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_17_393"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="text-left">
                <p className="text-[18px] font-semibold text-gray-700">
                  {item.title}
                </p>
                <p className="text-[13px] text-gray-600 leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="bg-white p-7 rounded-2xl shadow-lg w-full max-w-md col-span-2 mx-auto">
            <h2 className="text-start text-lg leading-tight font-semibold text-gray-700">
              {lang === "ENG"
                ? "Join the waitlist to get early access"
                : "지금 웨이트리스트에 등록하면"}{" "}
              <br />
              {lang === "ENG" ? "and an " : "얼리 액세스와"}
              <span
                className="bg-[linear-gradient(to_right,#801414_0%,#7A0F0F_45%,#D88A6A_100%)]
             bg-clip-text text-transparent"
              >
                {lang === "ENG"
                  ? "exclusive onboarding session."
                  : "전담 온보딩 세션을 드려요."}
              </span>
            </h2>

            <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
              {/* Business Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-start font-medium">
                  {lang === "ENG" ? "Business Name " : "업체명 "}{" "}
                  <span className="text-[#801414]">*</span>
                </label>
                <input
                  type="text"
                  name="business_name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-2 focus:border-[#801414] focus:ring-[#801414] focus:outline-none text-xs"
                  placeholder="Your Business Name"
                  required
                />
              </div>

              {/* Instagram */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-start font-medium">
                  {lang === "ENG"
                    ? "Instagram Account"
                    : "인스타그램 계정 (선택)"}
                </label>
                <input
                  type="text"
                  name="instagram_account"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-2 focus:border-[#801414] focus:ring-[#801414] focus:outline-none text-xs"
                  placeholder="@username"
                />
              </div>

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-start font-medium">
                  {lang === "ENG" ? "Contact Person " : "담당자 성함 "}
                  <span className="text-[#801414]">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-2 focus:border-[#801414] focus:ring-[#801414] focus:outline-none text-xs"
                  placeholder="Full Name"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-start font-medium">
                  {lang === "ENG" ? "Mobile Number " : "휴대폰 번호 "}
                  <span className="text-[#801414]">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative w-20">
                    <select
                      name="mobile_code"
                      onChange={handleCountryChange}
                      className="appearance-none w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-2 focus:border-[#801414] focus:ring-[#801414] focus:outline-none text-xs bg-white"
                    >
                      <option value="+62">+62</option>
                      <option value="+82">+82</option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-500"
                      >
                        <path
                          d="M5 7L10 12L15 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    name="mobile_number"
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-2 focus:border-[#801414] focus:ring-[#801414] focus:outline-none text-xs"
                    placeholder={
                      countryCode === "+62"
                        ? "812xxxxxxx"
                        : countryCode === "+82"
                        ? "10 xxxx xxxx"
                        : ""
                    }
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-start font-medium">
                  {lang === "ENG" ? "Email " : "이메일 "}
                  <span className="text-[#801414]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-2 focus:border-[#801414] focus:ring-[#801414] focus:outline-none text-xs"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="
    w-full text-white py-4 rounded-3xl text-sm font-semibold mt-2
    bg-[linear-gradient(to_right,#7A0F0F_0%,#7A0F0F_45%,#D88A6A_100%)]
    transition-all duration-500 ease-out
    hover:scale-[1.03]
    hover:shadow-[0_4px_20px_rgba(122,15,15,0.4)]
    hover:bg-[linear-gradient(to_left,#7A0F0F_0%,#7A0F0F_45%,#D88A6A_100%)]"
              >
                {lang === "ENG" ? "Join Waitlist" : "웨이트리스트 신청하기"}
              </button>

              <p className="text-sm text-start text-gray-500">
                <span className="text-[#801414]">*</span>
                {lang === "ENG"
                  ? "The information you submitted will be used only for early access notifications and onboarding."
                  : "⁠제출해 주신 정보는 얼리 액세스 안내와 온보딩을 위해서만 사용됩니다."}
              </p>
            </form>
          </div>
          <div className="flex justify-center col-span-3 relative">
            <img
              src="preview.png"
              alt="Preview Dashboard & Apps"
              className="w-4xl relative z-10"
            />
          </div>
        </div>
      </div>

      <img
        src="Logogram.svg"
        alt="Logo"
        className="absolute bottom-0 right-0 w-[775px] opacity-5 pointer-events-none z-0 translate-x-1/5 translate-y-1/7"
      />
    </div>
  );
}
