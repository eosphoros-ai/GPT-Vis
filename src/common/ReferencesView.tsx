import { LinkOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import React from 'react';

type Reference = {
  name: string;
  chunks: number[];
};
type IChunk = {
  content: string;
  doc_name: string;
  doc_type: string;
  document_id: string | number;
  gmt_created: string;
  gmt_modified: string;
  id: string | number;
  meta_info: string;
  recall_score?: string | number;
};

function ReferencesView({
  title,
  references,
}: {
  title: string;
  references: Reference[];
}) {
  if (!references || references?.length < 1) {
    return null;
  }

  return (
    <div className="border-t-[1px] border-gray-300 mt-3 py-2">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        <LinkOutlined className="mr-2" />
        <span className="font-semibold">{title}</span>
      </p>
      {references.map((reference: Reference, index: number) => (
        <div
          key={`file_${index}`}
          className="text-sm font-normal block ml-2 h-6 leading-6 overflow-hidden"
        >
          <span className="inline-block w-6">[{index + 1}]</span>
          <span className="mr-2 lg:mr-4 text-blue-400">{reference.name}</span>
          {reference?.chunks?.map((chunk: IChunk | number, index) => (
            <span key={`chunk_${index}`}>
              {typeof chunk === 'object' ? (
                <Popover
                  content={
                    <div className="max-w-4xl">
                      <p className="mt-2 font-bold mr-2 border-t border-gray-500 pt-2">
                        Content:
                      </p>
                      <p>{chunk?.content || 'No Content'}</p>
                      <p className="mt-2 font-bold mr-2 border-t border-gray-500 pt-2">
                        MetaData:
                      </p>
                      <p>{chunk?.meta_info || 'No MetaData'}</p>
                      <p className="mt-2 font-bold mr-2 border-t border-gray-500 pt-2">
                        Score:
                      </p>
                      <p>{chunk?.recall_score || ''}</p>
                    </div>
                  }
                  title="Chunk Information"
                >
                  <span
                    className="cursor-pointer text-blue-500 ml-2"
                    key={`chunk_content_${chunk?.id}`}
                  >
                    {chunk?.id}
                  </span>
                </Popover>
              ) : (
                <span
                  className="cursor-pointer text-blue-500 ml-2"
                  key={`chunk_id_${chunk}`}
                >
                  {chunk}
                </span>
              )}
              {index < reference?.chunks.length - 1 && (
                <span key={`chunk_comma_${index}`}>,</span>
              )}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ReferencesView;
