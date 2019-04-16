export interface AppInt{
    AppName?: string,
    AppKey?: string,
    AppID?: string
}


export interface AppId{
    _id?: string,
    AppName?: string,
    AppKey?: string,
    AppID?: string
}


export interface WSData{
    language?: string,
    game_version?: string,
    device_type?: string,
    device_model?: string,
    tags_irid?: string,
    tags_country?: string,
    invalid_identifier?: string,
    country?: string,
    AppID?: string,
    AppName?: string,
    from_lastactive?: string,
    to_lastactive?: string,
    from_createdat?: string,
    to_createdat?: string,
    from_bday?: string,
    to_bday?: string,
    from_DateAdded?: string,
    to_DateAdded?: string 
}