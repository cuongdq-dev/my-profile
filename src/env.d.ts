declare global {
  namespace App {
    interface HTMLAttributes<T> {
      "data-i18n"?: UiKeys; // 🎯 Gợi ý giá trị hợp lệ khi nhập `data-i18n=""`
    }

    interface Locals {}
  }

  // TODO UPDATE

  type ProjectItem = {
    title: string;
    image: string;
    category: string;
    description: string;
    link: string;
  };

  type ListResponse = {
    category?: CategoryItem;
    tag?: { query?: string; slug?: string };
    data: ArticleItem[];
    meta: {
      itemsPerPage: number;
      totalItems: number;
      currentPage: number;
      totalPages: number;
    };
    links: {
      first?: string;
      previous?: string;
      current: string;
      next?: string;
      last?: string;
    };
  };
}

export {};
