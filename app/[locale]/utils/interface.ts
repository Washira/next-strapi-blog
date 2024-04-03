export interface Category {
  data: {
    id: string
    attributes: {
      title: string
      createdAt: string
      updatedAt: string
      publishedAt: string
    }
  }
}

export interface Post {
  data: {
    id: string
    attributes: {
      title: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      content: [
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
      cover_img: any
      categories: Category
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
