export interface Params {
  params: {
    locale: string
  }
}

export interface Categories {
  data: [
    {
      id: string
      attributes: {
        title: string
        createdAt: string
        updatedAt: string
        publishedAt: string
      }
    }
  ]
}

export interface Post {
  data: {
    id: string
    attributes: {
      title: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      content:
        | [
            {
              type: string
              children: [
                {
                  type: string
                  text: string
                }
              ]
            }
          ]
        | any
      cover_img: any
      categories: Categories
      localizations: {
        data: [
          {
            id: string
            attributes: {
              locale: string
            }
          }
        ]
      }
      locale: string
    }
  }
}
