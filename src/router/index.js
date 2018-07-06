import Vue from 'vue'
import Router from 'vue-router'
// import Headline from 'components/headline/headline'
// import Activity from 'components/activity/activity'
// import Raiders from 'components/raiders/raiders'
// import Data from 'components/data/data'
// import Article from 'components/article/article'
// import Search from 'base/search-content/search-content'
// import Collect from 'components/collect/collect'
// import Admin from 'components/admin/admin'
// import AdminTreasure from 'components/admin-treasure/admin-treasure'
// import Treasure from 'components/treasure/treasure'
// import TreasureTable from 'components/treasure-table/treasure-table'

Vue.use(Router)

const Index = (resolve) => {
  import('components/index/index').then((module) => {
    resolve(module)
  })
}

const Headline = (resolve) => {
  import('components/headline/headline').then((module) => {
    resolve(module)
  })
}

const Activity = (resolve) => {
  import('components/activity/activity').then((module) => {
    resolve(module)
  })
}

const Raiders = (resolve) => {
  import('components/raiders/raiders').then((module) => {
    resolve(module)
  })
}

const Data = (resolve) => {
  import('components/data/data').then((module) => {
    resolve(module)
  })
}

const Article = (resolve) => {
  import('components/article/article').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('base/search-content/search-content').then((module) => {
    resolve(module)
  })
}

const Collect = (resolve) => {
  import('components/collect/collect').then((module) => {
    resolve(module)
  })
}

const Admin = (resolve) => {
  import('components/admin/admin').then((module) => {
    resolve(module)
  })
}

const AdminTreasure = (resolve) => {
  import('components/admin-treasure/admin-treasure').then((module) => {
    resolve(module)
  })
}

const Treasure = (resolve) => {
  import('components/treasure/treasure').then((module) => {
    resolve(module)
  })
}

const TreasureTable = (resolve) => {
  import('components/treasure-table/treasure-table').then((module) => {
    resolve(module)
  })
}

const AdminArticle = (resolve) => {
  import('components/admin-article/admin-article').then((module) => {
    resolve(module)
  })
}

const AdminLogin = (resolve) => {
  import('components/admin-login/admin-login').then((module) => {
    resolve(module)
  })
}

const AdminCount = (resolve) => {
  import('components/admin-count/admin-count').then((module) => {
    resolve(module)
  })
}

const DataLt = (resolve) => {
  import('components/data-lt/data-lt').then((module) => {
    resolve(module)
  })
}


export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/hot',
          component: Headline
        },
        {
          path: '/activity',
          component: Activity
        },
        {
          path: '/raiders',
          component: Raiders
        },
        {
          path: '/data',
          component: Data
        },
        {
          path: '/search',
          component: Search
        }
      ]
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/admin/treasure',
          component: AdminTreasure
        },
        {
          path: '/admin/article',
          component: AdminArticle
        },
        {
          path: '/admin/count',
          component: AdminCount
        }
      ] 
    },
    {
      path: '/treasure',
      component: Treasure,
      children: [
        {
          path: '/treasure/:id',
          component: TreasureTable
        }
      ] 
    },
    {
      path: '/login',
      component: AdminLogin
    },
    {
      path: '/lt',
      component: DataLt
    }
  ]
})
