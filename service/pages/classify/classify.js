Page({
  data: {
    category: [
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },
  onReady() {
    var self = this;
    // wx.request({
    //   url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
    //   success(res) {
    //     self.setData({
    //       detail: res.data
    //     })
    //   }
    // });

    self.setData({
      detail: [
        {
          "id": "guowei",
          "banner": "/image/c1.png",
          "cate": "鏋滃懗",
          "detail": [
            {
              "thumb": "/image/c2.png",
              "name": "姊ㄨ姳甯﹂洦 3涓�"
            },
            {
              "thumb": "/image/c3.png",
              "name": "绾㈡灒 500g"
            },
            {
              "thumb": "/image/c4.png",
              "name": "濂囧紓鏋� 2涓�"
            },
            {
              "thumb": "/image/c4.png",
              "name": "濂囧紓鏋� 2涓�"
            },
            {
              "thumb": "/image/c3.png",
              "name": "绾㈡灒 500g"
            },
            {
              "thumb": "/image/c2.png",
              "name": "姊ㄨ姳甯﹂洦 3涓�"
            }
          ]
        },
        {
          "id": "shucai",
          "banner": "/image/c1.png",
          "cate": "钄彍",
          "detail": [
            {
              "thumb": "/image/s4.png",
              "name": "鐡滃瓙 3涓�"
            },
            {
              "thumb": "/image/s5.png",
              "name": "鑺硅彍 500g"
            },
            {
              "thumb": "/image/s6.png",
              "name": "灏忕背"
            },
            {
              "thumb": "/image/s6.png",
              "name": "灏忕背"
            },
            {
              "thumb": "/image/s5.png",
              "name": "鑺硅彍 500g"
            },
            {
              "thumb": "/image/s4.png",
              "name": "鐡滃瓙 4涓�"
            }
          ]
        },
        {
          "id": "chaohuo",
          "banner": "/image/c1.png",
          "cate": "鐐掕揣",
          "detail": [
            {
              "thumb": "/image/c2.png",
              "name": "姊ㄨ姳甯﹂洦 3涓�"
            },
            {
              "thumb": "/image/c3.png",
              "name": "绾㈡灒 500g"
            },
            {
              "thumb": "/image/c4.png",
              "name": "濂囧紓鏋� 2涓�"
            },
            {
              "thumb": "/image/c4.png",
              "name": "濂囧紓鏋� 2涓�"
            },
            {
              "thumb": "/image/c3.png",
              "name": "绾㈡灒 500g"
            },
            {
              "thumb": "/image/c2.png",
              "name": "姊ㄨ姳甯﹂洦 3涓�"
            }
          ]
        },
        {
          "id": "dianxin",
          "banner": "/image/c1.png",
          "cate": "鐐瑰績",
          "detail": [
            {
              "thumb": "/image/s4.png",
              "name": "鐡滃瓙 3涓�"
            },
            {
              "thumb": "/image/s5.png",
              "name": "鑺硅彍 500g"
            },
            {
              "thumb": "/image/s6.png",
              "name": "灏忕背"
            },
            {
              "thumb": "/image/s6.png",
              "name": "灏忕背"
            },
            {
              "thumb": "/image/s5.png",
              "name": "鑺硅彍 500g"
            },
            {
              "thumb": "/image/s4.png",
              "name": "鐡滃瓙 4涓�"
            }
          ]
        },
        {
          "id": "cucha",
          "banner": "/image/c1.png",
          "cate": "绮楄尪",
          "detail": [
            {
              "thumb": "/image/c2.png",
              "name": "姊ㄨ姳甯﹂洦 3涓�"
            },
            {
              "thumb": "/image/c3.png",
              "name": "绾㈡灒 500g"
            },
            {
              "thumb": "/image/c4.png",
              "name": "濂囧紓鏋� 2涓�"
            },
            {
              "thumb": "/image/c4.png",
              "name": "濂囧紓鏋� 2涓�"
            },
            {
              "thumb": "/image/c3.png",
              "name": "绾㈡灒 500g"
            },
            {
              "thumb": "/image/c2.png",
              "name": "姊ㄨ姳甯﹂洦 3涓�"
            }
          ]
        },
        {
          "id": "danfan",
          "banner": "/image/c1.png",
          "cate": "娣￠キ",
          "detail": [
            {
              "thumb": "/image/s4.png",
              "name": "鐡滃瓙 3涓�"
            },
            {
              "thumb": "/image/s5.png",
              "name": "鑺硅彍 500g"
            },
            {
              "thumb": "/image/s6.png",
              "name": "灏忕背"
            },
            {
              "thumb": "/image/s6.png",
              "name": "灏忕背"
            },
            {
              "thumb": "/image/s5.png",
              "name": "鑺硅彍 500g"
            },
            {
              "thumb": "/image/s4.png",
              "name": "鐡滃瓙 4涓�"
            }
          ]
        }
      ]
    })
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  }

})