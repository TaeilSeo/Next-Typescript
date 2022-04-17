export interface GetNoticeResults {
    info: Info;
    results: Notice[];
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export interface Notice {
    id:         number;
    company:    string;
    desc:       string;
    url:        string;
    started_at: Date;
    ended_at:   Date;
    is_proper:  number;
    is_checked: number;
    created_at: Date;
}
