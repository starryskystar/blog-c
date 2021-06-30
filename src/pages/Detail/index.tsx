import React, { useState } from 'react';
import ArtTool from '@/components/Article/ArtTool';
import BackTop from '@/components/Article/BackTop';

import styles from './index.less';

interface DetailProps {}

const Detail: React.FC<DetailProps> = (props) => {
  return (
    <div className={styles.art_detail}>
      <div className={styles.art_main}>
        <div className={styles.art_head}>
          <a href="">
            <img src={require('@/assets/icon/logo.png')} alt="error" />
          </a>
          <div className={styles.art_h__right}>
            <div className={styles.name}>月下</div>
            <div className={styles.meta}>
              <time>2021年06月23日</time>
            </div>
          </div>
        </div>

        <div className={styles.art_content}>
          1. 什么是 Immutable ？ Immutable Data
          就是一旦创建，就不能再被更改的数据。对 Immutable
          对象的任何修改或添加删除操作都会返回一个新的 Immutable
          对象。主要原理是采用了 Persistent Data
          Structure（持久化数据结构)，就是当每次修改后我们都会得到一个新的版本，且旧版本可以完好保留，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免
          deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了
          Structural
          Sharing（结构共享），就是对于本次操作没有修改的部分，我们可以直接把相应的旧的节点拷贝过去，这其实就是结构共享
        </div>
      </div>
      <ArtTool />
      <BackTop />
    </div>
  );
};

export default Detail;