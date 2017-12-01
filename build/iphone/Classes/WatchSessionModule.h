/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#import "TiModule.h"
#import <WatchConnectivity/watchConnectivity.h>

@interface WatchSessionModule : TiModule<WCSessionDelegate> {
@private
    WCSession *watchSession;
}

@property(nonatomic,readonly) NSNumber* ACTIVATION_STATE_NOT_ACTIVATED;
@property(nonatomic,readonly) NSNumber* ACTIVATION_STATE_INACTIVE;
@property(nonatomic,readonly) NSNumber* ACTIVATION_STATE_ACTIVATED;

@end