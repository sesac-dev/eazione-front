import BottomNavigation from '@/components/@common/BottomNavigation';
import Header from '@/components/@common/Header';
import { icons } from '@/constants/icons';
import docs from '@/assets/image/docs.png';
import { useNavigate } from 'react-router-dom';
import { useDocs } from '@/hooks/docs/useDocs';
import { getFileNameFromURL } from '@/utils/getFileNameFromURL';
import { useState } from 'react';

const DocsPage = () => {
  const navigate = useNavigate();
  const { useGetDocsList } = useDocs();
  const { data } = useGetDocsList();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="h-screen w-full">
        <Header left={icons.BACK} center="마이 문서함" left_func={() => navigate(-1)} />
        <div className="h-[calc(100vh-80px)] w-full px-5 pt-12">
          <div className="h-full overflow-y-auto pb-3 pt-5">
            <div className="grid grid-cols-3 gap-8">
              {data?.data.urls.map(url => {
                return (
                  <>
                    {isModalOpen && (
                      <div className="absolute bottom-0 left-0 right-0 top-0 z-50 h-full w-full max-w-[410px] bg-black">
                        <div onClick={() => setIsModalOpen(false)} className="flex h-12 justify-start px-5 pt-5">
                          {icons.CANCEL}
                        </div>
                        <div className="flex h-full w-full items-center justify-center pb-24">
                          <img src={url} className={`h-full w-full rounded-lg object-contain`} />
                        </div>
                      </div>
                    )}
                    <div
                      key={url}
                      onClick={() => setIsModalOpen(true)}
                      className="flex flex-col items-center justify-center gap-2 whitespace-pre text-center text-sm text-ui_01"
                    >
                      <img src={docs} />
                      <p>{getFileNameFromURL(url)}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default DocsPage;
