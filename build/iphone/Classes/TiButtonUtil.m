/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#import "TiButtonUtil.h"
#import "TiBase.h"


@implementation TiButtonUtil

+(UIView*)systemButtonWithType:(int)type
{
	switch (type)
	{
		case UIQueens_MemoryNativeItemInfoLight:
		{
			return [UIButton buttonWithType:UIButtonTypeInfoLight];
		}
		case UIQueens_MemoryNativeItemInfoDark:
		{
			return [UIButton buttonWithType:UIButtonTypeInfoDark];
		}
		case UIQueens_MemoryNativeItemDisclosure:
		{
			return [UIButton buttonWithType:UIButtonTypeDetailDisclosure];
		}
		case UIQueens_MemoryNativeItemContactAdd:
		{
			return [UIButton buttonWithType:UIButtonTypeContactAdd];
		}
		case UIQueens_MemoryNativeItemSpinner:
		{
			UIActivityIndicatorView *button = [[[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhite] autorelease];
			[button startAnimating];
			return button;
		}
	}
	return nil;
}

+(UIView*)buttonWithType:(int)type
{
	UIView *button = [TiButtonUtil systemButtonWithType:type];
	if (button==nil)
	{
		button = [UIButton buttonWithType:type];
	}
	return button;
}

@end
