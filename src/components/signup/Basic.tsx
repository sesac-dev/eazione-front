import Header from '../@common/Header';
import { icons } from '@/constants/icons';
import useSaveImageFile from '@/hooks/@common/useSaveImageFile';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignatureBottomSheet from './SignatureBottomSheet';
import useInput from '@/hooks/@common/useInput';
import { IBasicMember, IFamily } from '@/types';
import { useSignup } from '@/hooks/signup/useSignup';
import { dataURLtoFile } from '@/utils/dataURLtoFile';

const Basic = () => {
  const navigate = useNavigate();
  const { imgRef, previewImg, saveImgFiles, postImg } = useSaveImageFile();
  const [signatureImg, setSignatureImg] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [values, changer] = useInput<IBasicMember>({
    income: 0,
    phoneNumber: '',
    familyMember: [{ name: '', relationship: '', residence: '' }],
    housingType: '',
    currentWorkplace: '',
    currentWorkplaceRegistrationNumber: '',
    workplacePhoneNumber: '',
  });

  const [family, familyChanger] = useInput<IFamily>({ name: '', relationship: '', residence: '' });

  const { usePostUserAddInfo } = useSignup();
  const { mutate } = usePostUserAddInfo();

  const postAddInfoHandler = () => {
    const formData = new FormData();
    const json = JSON.stringify({
      ...values,
      familyMember: [family],
    });

    const blob = new Blob([json], { type: 'application/json' });

    formData.append('info', blob);
    formData.append('img', postImg!);
    formData.append('signature', dataURLtoFile(signatureImg, 'signature'));

    mutate(formData);
  };

  return (
    <>
      {isOpen && (
        <SignatureBottomSheet
          closeEvent={() => setIsOpen(false)}
          setSignatureImg={setSignatureImg}
          postAddInfoHandler={postAddInfoHandler}
        />
      )}
      <Header left={icons.BACK} left_func={() => navigate(-1)} />
      <div className="h-full w-full px-5 pt-12">
        <div className="flex h-full w-full flex-col gap-10">
          <div className="flex flex-col gap-2 pt-5">
            <h1 className="text-xl font-bold">
              원활한 자동 문서 작성을 위해 <br /> 회원 정보를 입력해주세요.
            </h1>
            <p className="text-sm text-[#ADADAD]">빠른 자동 문서 작성을 위해 개인정보를 입력해 주세요.</p>
          </div>
          <div className="flex h-full flex-col gap-5 overflow-y-scroll text-sm">
            <div className="flex w-full flex-col gap-3">
              <p className="text-ui_06">휴대폰 번호</p>
              <input
                value={values.phoneNumber}
                name="phoneNumber"
                onChange={changer}
                type="text"
                className="w-full border-b px-1 pb-1 outline-none"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-ui_06">가족 구성원</p>
              <div className="flex items-start gap-3">
                <div className="h-7 w-7">{icons.PLUS}</div>
                <div className="flex w-full flex-col gap-3">
                  <div className="flex w-full flex-col gap-3">
                    <input
                      value={family.name}
                      name="name"
                      onChange={familyChanger}
                      type="text"
                      className="w-full border-b px-1 pb-1 outline-none"
                      placeholder="Family member"
                    />
                    <input
                      value={family.relationship}
                      name="relationship"
                      onChange={familyChanger}
                      type="text"
                      className="w-full border-b px-1 pb-1 outline-none"
                      placeholder="Relationship"
                    />
                    <input
                      value={family.residence}
                      name="residence"
                      onChange={familyChanger}
                      type="text"
                      className="w-full border-b px-1 pb-1 outline-none"
                      placeholder="Residence"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-ui_06">주거 형태</p>
              <div className="flex gap-5">
                <input
                  value={values.housingType}
                  name="housingType"
                  onChange={changer}
                  type="text"
                  className="w-full border-b px-1 pb-1 outline-none"
                  placeholder="Housing Type"
                />
                <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Other than" />
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-ui_06">연소득</p>
              <div className="flex border-b pb-1">
                <input
                  value={values.income}
                  name="income"
                  onChange={changer}
                  type="text"
                  className="w-full px-1 outline-none"
                  placeholder="Annual income"
                />
                <p className="w-10">만원</p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-ui_06">근무처명</p>
              <input
                value={values.currentWorkplace}
                name="currentWorkplace"
                onChange={changer}
                type="text"
                className="w-full border-b px-1 pb-1 outline-none"
                placeholder="Current Workplace"
              />
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-ui_06">근무처 사업자등록번호</p>
              <input
                value={values.currentWorkplaceRegistrationNumber}
                name="currentWorkplaceRegistrationNumber"
                onChange={changer}
                type="text"
                className="w-full border-b px-1 pb-1 outline-none"
                placeholder="Current Workplace Registration Number"
              />
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-ui_06">근무처 전화번호</p>
              <input
                value={values.workplacePhoneNumber}
                name="workplacePhoneNumber"
                onChange={changer}
                type="text"
                className="w-full border-b px-1 pb-1 outline-none"
                placeholder="Workplace phone number"
              />
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-ui_06">증명사진 업로드</p>
              <p className="text-tine_06">3.5cm x 4.5cm 크기의 컬러사진, 최근 6개월 이내 촬영, 흰색 배경</p>
              <label
                className={`relative flex h-[170px] w-[132px] items-center justify-center rounded-lg ${previewImg ? 'border border-ui_11' : 'bg-ui_11'}`}
                htmlFor="photos"
              >
                <input
                  name="photos"
                  onChange={saveImgFiles}
                  ref={imgRef}
                  multiple
                  type="file"
                  accept="image/*"
                  id="photos"
                  className="hidden h-full w-full cursor-pointer"
                ></input>
                {previewImg ? (
                  <img src={previewImg} className="absolute z-10 h-full w-full rounded-lg object-contain"></img>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2">
                    {icons.PLUS}
                    <p className="text-ui_05">사진 첨부하기</p>
                  </div>
                )}
              </label>
            </div>

            <div className="flex gap-5 pb-5 pt-7">
              <button
                onClick={() => navigate('/chat')}
                className="w-full rounded-lg bg-ui_10 py-4 font-bold text-ui_01"
              >
                취소
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="w-full rounded-lg bg-primary py-4 font-bold text-white"
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic;
