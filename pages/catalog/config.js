const categoryList = [
  {
    id: 1,
    name: '茶韵'
  },
  {
    id: 2,
    name: '尔厅八方'
  },
  {
    id: 3,
    name: '观书儒雅'
  },
  {
    id: 4,
    name: '盒盒美美'
  },
  {
    id: 5,
    name: '鉴赏'
  },
  {
    id: 6,
    name: '食今不昧'
  },
  {
    id: 7,
    name: '书香'
  },
  {
    id: 8,
    name: '闲情逸致'
  },
  {
    id: 9,
    name: '雅玩'
  }
]

const currentSubCategoryList = [
  {
    pid: 1,
    currentCategory: {
      id: 1,
      picUrl: 'https://i.loli.net/2020/09/16/lIq2kae5AKGoBZJ.jpg'
    },
    currentSubCategoryList: [
      {
        id: 1,
        picUrl: 'https://i.loli.net/2020/09/16/GC3c9Zh1gkbpV5U.jpg',
        name: '1',
        frontName: '茶韵'
      },
      {
        id: 2,
        picUrl: 'https://i.loli.net/2020/09/16/n6PtiGSTuKmkOVC.jpg',
        name: '1',
        frontName: '茶韵'
      },
      {
        id: 3,
        picUrl: 'https://i.loli.net/2020/09/16/9MLJfhzUEGyBeau.jpg',
        name: '1',
        frontName: '茶韵'
      }
    ]
  },
  {
    pid: 2,
    currentCategory: {
      id: 2,
      picUrl: 'https://i.loli.net/2020/09/16/lIq2kae5AKGoBZJ.jpg'
    },
    currentSubCategoryList: [
      {
        id: 1,
        picUrl: 'https://i.loli.net/2020/09/16/oYrx4Iuj3kZnf8B.png',
        name: '1',
        frontName: '茶韵'
      },
      {
        id: 2,
        picUrl: 'https://i.loli.net/2020/09/16/dxHXQ2InfWV5YRr.png',
        name: '1',
        frontName: '茶韵'
      }
    ]
  },
  {
    pid: 3,
    currentCategory: {
      id: 3,
      picUrl: 'https://i.loli.net/2020/09/16/lIq2kae5AKGoBZJ.jpg'
    },
    currentSubCategoryList: [
      {
        id: 1,
        picUrl: 'https://i.loli.net/2020/09/16/DbOKdnC3veliMQH.png',
        name: '1',
        frontName: '茶韵'
      },
      {
        id: 2,
        picUrl: 'https://i.loli.net/2020/09/16/nJs9m3ObS1XGQDU.png',
        name: '1',
        frontName: '茶韵'
      }
    ]
  },
  {
    pid: 4,
    currentCategory: {
      id: 4,
      picUrl: 'https://i.loli.net/2020/09/16/lIq2kae5AKGoBZJ.jpg'
    },
    currentSubCategoryList: [
      {
        id: 1,
        picUrl: 'https://i.loli.net/2020/09/16/eRN71xMaD2wtH85.png',
        name: '1',
        frontName: '茶韵'
      }
    ]
  }
]

export {
  categoryList,
  currentSubCategoryList
}