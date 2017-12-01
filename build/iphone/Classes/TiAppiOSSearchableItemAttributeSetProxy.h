/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#ifdef USE_TI_APPIOSSEARCHABLEITEMATTRIBUTESET
#import "TiProxy.h"
#import <CoreSpotlight/CoreSpotlight.h>

@interface TiAppiOSSearchableItemAttributeSetProxy : TiProxy {
@private
    NSArray *dateFieldTypes;
    NSArray *urlFieldTypes;
    NSArray *unsupportedFieldTypes;
}

-(id)initWithItemContentType:(NSString *)itemContentType withProps:(NSDictionary*)props;

-(id)initWithItemAttributeSet:(CSSearchableItemAttributeSet*)attributeSet;

@property(nonatomic,retain) CSSearchableItemAttributeSet *attributes;

@end
#endif
