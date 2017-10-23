//------------------------------------------------------------------------------------------------//
//                        This file is part of the Scandit Parsing Library                        //
//                                                                                                //
//                   Copyright (c) 2016-2017 Scandit AG. All rights reserved                      //
//------------------------------------------------------------------------------------------------//

#import <Foundation/Foundation.h>


@interface SBSParserField : NSObject

@property (nonatomic, readonly, nonnull) NSString *name;
@property (nonatomic, readonly, nullable) id parsed;
@property (nonatomic, readonly, nonnull) NSString *rawString;

@end
