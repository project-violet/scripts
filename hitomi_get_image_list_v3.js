// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 2679:
case 1767:
case 3639:
case 1766:
case 1482:
case 1573:
case 3971:
case 1269:
case 3967:
case 1087:
case 3966:
case 3385:
case 385:
case 3473:
case 2548:
case 199:
case 922:
case 2317:
case 1680:
case 3511:
case 1411:
case 3709:
case 618:
case 1832:
case 63:
case 1865:
case 627:
case 284:
case 1909:
case 2883:
case 3664:
case 61:
case 2902:
case 999:
case 1556:
case 3457:
case 3879:
case 638:
case 2116:
case 1208:
case 2199:
case 3910:
case 1392:
case 1723:
case 832:
case 593:
case 2128:
case 854:
case 3421:
case 1710:
case 3495:
case 103:
case 1672:
case 1968:
case 3275:
case 3088:
case 1341:
case 45:
case 2446:
case 3923:
case 2716:
case 3540:
case 105:
case 3887:
case 4024:
case 3849:
case 891:
case 3886:
case 2255:
case 2717:
case 1814:
case 2624:
case 958:
case 2219:
case 595:
case 3313:
case 270:
case 2477:
case 403:
case 422:
case 1366:
case 3437:
case 339:
case 778:
case 34:
case 2963:
case 2297:
case 1371:
case 15:
case 3245:
case 1367:
case 2859:
case 1537:
case 2728:
case 367:
case 2815:
case 3168:
case 857:
case 2799:
case 1079:
case 4086:
case 1543:
case 3504:
case 3941:
case 2927:
case 158:
case 1323:
case 4049:
case 499:
case 1792:
case 1404:
case 3443:
case 4087:
case 3368:
case 348:
case 77:
case 2649:
case 319:
case 905:
case 1166:
case 2686:
case 1167:
case 3992:
case 546:
case 1888:
case 3615:
case 2951:
case 2080:
case 2405:
case 2453:
case 1212:
case 3001:
case 606:
case 383:
case 761:
case 3120:
case 3659:
case 95:
case 1499:
case 3834:
case 1950:
case 2874:
case 3890:
case 3977:
case 1428:
case 1279:
case 4069:
case 3808:
case 3599:
case 1563:
case 29:
case 3961:
case 873:
case 1333:
case 1776:
case 544:
case 3750:
case 1146:
case 2669:
case 925:
case 2358:
case 382:
case 1875:
case 2280:
case 350:
case 3516:
case 511:
case 2170:
case 3130:
case 3194:
case 3517:
case 1416:
case 4008:
case 1551:
case 9:
case 2055:
case 3869:
case 2003:
case 3394:
case 2370:
case 3560:
case 3905:
case 2111:
case 2158:
case 3418:
case 835:
case 2608:
case 790:
case 2097:
case 3426:
case 2943:
case 298:
case 3265:
case 1526:
case 1389:
case 402:
case 1662:
case 2096:
case 1346:
case 1635:
case 2704:
case 3148:
case 1133:
case 3778:
case 3022:
case 1105:
case 3644:
case 1603:
case 1619:
case 2711:
case 1008:
case 3881:
case 1224:
case 2520:
case 1034:
case 1090:
case 1697:
case 833:
case 592:
case 3178:
case 2062:
case 366:
case 481:
case 2242:
case 2035:
case 1377:
case 2291:
case 1531:
case 2973:
case 3933:
case 3431:
case 4054:
case 259:
case 568:
case 102:
case 123:
case 1376:
case 4:
case 3214:
case 1746:
case 2681:
case 547:
case 1177:
case 1789:
case 529:
case 3629:
case 1176:
case 2410:
case 3150:
case 1747:
case 3378:
case 813:
case 3946:
case 2423:
case 3947:
case 2995:
case 2770:
case 3402:
case 3794:
case 2140:
case 889:
case 571:
case 2956:
case 1994:
case 286:
case 4012:
case 440:
case 3854:
case 1305:
case 1845:
case 875:
case 2957:
case 3415:
case 1790:
case 1515:
case 957:
case 2653:
case 2011:
case 3876:
case 652:
case 2058:
case 1312:
case 741:
case 3934:
case 680:
case 3861:
case 3908:
case 2837:
case 3877:
case 1210:
case 2197:
case 1638:
case 1604:
case 2735:
case 368:
case 2082:
case 2196:
case 392:
case 3268:
case 1381:
case 3048:
case 1223:
case 566:
case 3122:
case 2487:
case 1975:
case 1442:
case 1181:
case 2661:
case 734:
case 2677:
case 1769:
case 3793:
case 641:
case 3636:
case 3322:
case 2676:
case 780:
case 3525:
case 3969:
case 3853:
case 3345:
case 3805:
case 329:
case 1089:
case 1425:
case 432:
case 3213:
case 3706:
case 2319:
case 1112:
case 3707:
case 2355:
case 2843:
case 2424:
case 1906:
case 501:
case 3209:
case 2070:
case 1907:
case 3094:
case 1878:
case 371:
case 3483:
case 1061:
case 344:
case 4047:
case 1077:
case 2335:
case 2900:
case 3375:
case 457:
case 4089:
case 1076:
case 1583:
case 3981:
case 2998:
case 1472:
case 3621:
case 2647:
case 803:
case 3695:
case 1781:
case 1292:
case 1169:
case 3572:
case 2362:
case 3833:
case 1308:
case 2873:
case 245:
case 1390:
case 1334:
case 3657:
case 582:
case 1670:
case 3106:
case 1712:
case 3656:
case 1480:
case 1005:
case 2944:
case 3889:
case 2719:
case 2895:
case 3847:
case 2821:
case 220:
case 1053:
case 3306:
case 1658:
case 669:
case 1134:
case 2217:
case 2038:
case 2479:
case 2228:
case 3285:
case 3439:
case 774:
case 2299:
case 1945:
case 2135:
case 472:
case 3175:
case 2796:
case 3745:
case 2797:
case 3152:
case 3867:
case 3871:
case 60:
case 3602:
case 1253:
case 2964:
case 189:
case 395:
case 3866:
case 1124:
case 933:
case 1500:
case 2204:
case 1386:
case 1529:
case 4023:
case 776:
case 3498:
case 1820:
case 2610:
case 2983:
case 2028:
case 2238:
case 3400:
case 3732:
case 3085:
case 1813:
case 2623:
case 54:
case 539:
case 2191:
case 4010:
case 4066:
case 133:
case 156:
case 1497:
case 3596:
case 3597:
case 2454:
case 1496:
case 3979:
case 1277:
case 1041:
case 2939:
case 346:
case 3388:
case 2391:
case 1149:
case 1092:
case 2342:
case 2522:
case 2667:
case 1779:
case 989:
case 2671:
case 1868:
case 1455:
case 3503:
case 435:
case 3823:
case 3555:
case 3444:
case 608:
case 3810:
case 676:
case 3352:
case 3701:
case 3519:
case 755:
case 583:
case 3332:
case 1179:
case 3562:
case 4092:
case 1914:
case 1786:
case 1462:
case 2641:
case 1246:
case 2692:
case 309:
case 960:
case 456:
case 915:
case 3987:
case 1066:
case 4041:
case 579:
case 1067:
case 2575:
case 3986:
case 1247:
case 3949:
case 2884:
case 2180:
case 3013:
case 3651:
case 2270:
case 3230:
case 3020:
case 973:
case 115:
case 840:
case 1952:
case 251:
case 2380:
case 2506:
case 1617:
case 2258:
case 653:
case 1616:
case 3752:
case 2507:
case 935:
case 2791:
case 2282:
case 2725:
case 413:
case 1699:
case 3663:
case 3165:
case 1379:
case 8:
case 2172:
case 564:
case 393:
case 2469:
case 3068:
case 2742:
case 2207:
case 623:
case 2558:
case 1118:
case 2713:
case 330:
case 1384:
case 1601:
case 1151:
case 2720:
case 3160:
case 3864:
case 3433:
case 3328:
case 2967:
case 2293:
case 4039:
case 1533:
case 876:
case 1127:
case 808:
case 2014:
case 542:
case 2639:
case 3679:
case 2923:
case 1880:
case 1327:
case 3091:
case 2275:
case 3025:
case 3489:
case 3235:
case 107:
case 1632:
case 1326:
case 1546:
case 4083:
case 3447:
case 2421:
case 264:
case 2910:
case 2683:
case 1163:
case 80:
case 1430:
case 551:
case 3116:
case 2879:
case 2457:
case 3594:
case 3117:
case 3530:
case 3360:
case 1274:
case 3902:
case 855:
case 365:
case 836:
case 594:
case 267:
case 3728:
case 3072:
case 363:
case 2785:
case 2065:
case 3476:
case 2245:
case 1999:
case 3963:
case 104:
case 239:
case 1083:
case 1576:
case 126:
case 3477:
case 407:
case 725:
case 370:
case 3255:
case 2849:
case 3984:
case 2320:
case 1102:
case 2309:
case 2887:
case 1244:
case 2540:
case 3760:
case 1842:
case 3918:
case 740:
case 2120:
case 1751:
case 904:
case 2109:
case 283:
case 1718:
case 387:
case 3453:
case 2113:
case 1960:
case 3405:
case 1553:
case 3080:
case 3951:
case 1825:
case 2615:
case 4059:
case 2992:
case 990:
case 1726:
case 3687:
case 3686:
case 219:
case 3578:
case 248:
case 2443:
case 625:
case 1614:
case 2824:
case 1229:
case 1478:
case 2941:
case 3927:
case 906:
case 2517:
case 2194:
case 924:
case 3311:
case 545:
case 1607:
case 1157:
case 3740:
case 65:
case 250:
case 3280:
case 161:
case 2201:
case 282:
case 1940:
case 3382:
case 1693:
case 1195:
case 1121:
case 2750:
case 41:
case 39:
case 1373:
case 877:
case 3937:
case 1029:
case 438:
case 2977:
case 1000:
case 2976:
case 2528:
case 605:
case 3936:
case 1098:
case 2348:
case 2834:
case 3738:
case 3272:
case 2022:
case 362:
case 2778:
case 75:
case 880:
case 2232:
case 1173:
case 596:
case 1675:
case 178:
case 3096:
case 124:
case 1938:
case 2265:
case 398:
case 1321:
case 449:
case 520:
case 3690:
case 3634:
case 2674:
case 705:
case 2418:
case 4074:
case 3111:
case 2905:
case 1264:
case 97:
case 2394:
case 1044:
case 3003:
case 1357:
case 3467:
case 13:
case 1571:
case 869:
case 3291:
case 2288:
case 3035:
case 3225:
case 3782:
case 1567:
case 3242:
case 118:
case 1982:
case 2178:
case 3138:
case 722:
case 837:
case 1773:
case 703:
case 699:
case 3520:
case 1074:
case 2881:
case 3898:
case 1420:
case 3800:
case 3829:
case 1413:
case 3758:
case 938:
case 2252:
case 2644:
case 58:
case 1911:
case 918:
case 3957:
case 1896:
case 1970:
case 461:
case 622:
case 386:
case 927:
case 1215:
case 3140:
case 1757:
case 2794:
case 3612:
case 3770:
case 2730:
case 588:
case 138:
case 1343:
case 874:
case 3304:
case 3995:
case 817:
case 2378:
case 3568:
case 2989:
case 47:
case 2150:
case 3410:
case 1137:
case 828:
case 2698:
case 1510:
case 543:
case 1329:
case 4043:
case 1300:
case 408:
case 773:
case 1549:
case 3486:
case 1587:
case 3196:
case 3082:
case 2643:
case 1962:
case 476:
case 2145:
case 3197:
case 3514:
case 2877:
case 3837:
case 2908:
case 38:
case 715:
case 3974:
case 2459:
case 3836:
case 1202:
case 1144:
case 3155:
case 1838:
case 3303:
case 1056:
case 2094:
case 2030:
case 1524:
case 3070:
case 1057:
case 1804:
case 3319:
case 586:
case 4036:
case 1488:
case 136:
case 153:
case 2805:
case 2345:
case 1021:
case 3397:
case 40:
case 343:
case 2969:
case 4037:
case 2525:
case 1650:
case 3676:
case 2322:
case 2637:
case 804:
case 3677:
case 826:
case 26:
case 1218:
case 1694:
case 2656:
case 2106:
case 1630:
case 2657:
case 1882:
case 3260:
case 1374:
case 2912:
case 4056:
case 3040:
case 155:
case 211:
case 4057:
case 976:
case 345:
case 3873:
case 2833:
case 675:
case 3689:
case 3532:
case 2193:
case 3646:
case 1798:
case 2695:
case 733:
case 1811:
case 3647:
case 2621:
case 1729:
case 3998:
case 2050:
case 1465:
case 453:
case 1036:
case 3565:
case 1227:
case 3929:
case 2375:
case 1037:
case 3335:
case 4021:
case 244:
case 598:
case 3796:
case 3135:
case 1263:
case 3299:
case 108:
case 2393:
case 2439:
case 396:
case 2285:
case 1996:
case 2954:
case 1870:
case 3755:
case 789:
case 90:
case 3703:
case 231:
case 3216:
case 2306:
case 2847:
case 3821:
case 3895:
case 1284:
case 2580:
case 3719:
case 1401:
case 1955:
case 3501:
case 656:
case 3944:
case 2307:
case 838:
case 174:
case 477:
case 1972:
case 2188:
case 117:
case 2765:
case 3623:
case 414:
case 2429:
case 2732:
case 3238:
case 3772:
case 394:
case 3983:
case 3610:
case 2498:
case 3099:
case 1243:
case 4002:
case 570:
case 295:
case 3964:
case 300:
case 2602:
case 2871:
case 2867:
case 1359:
case 3412:
case 3780:
case 1018:
case 2701:
case 1620:
case 2810:
case 1609:
case 2555:
case 2444:
case 974:
case 3060:
case 917:
case 1115:
case 2503:
case 3240:
case 827:
case 3671:
case 3802:
case 1739:
case 1422:
case 3667:
case 849:
case 83:
case 3522:
case 3342:
case 169:
case 3391:
case 1237:
case 246:
case 3325:
case 2979:
case 3545:
case 480:
case 2114:
case 2597:
case 1554:
case 2250:
case 434:
case 452:
case 137:
case 1236:
case 1508:
case 3434:
case 1899:
case 4051:
case 2474:
case 3959:
case 3490:
case 2618:
case 1828:
case 1590:
case 2020:
case 3408:
case 1364:
case 3270:
case 2101:
case 2013:
case 530:
case 672:
case 4018:
case 1295:
case 1031:
case 42:
case 2949:
case 180:
case 2986:
case 2365:
case 3575:
case 4026:
case 1475:
case 941:
case 437:
case 2987:
case 2714:
case 1383:
case 878:
case 824:
case 3641:
case 1817:
case 2562:
case 3372:
case 1816:
case 2332:
case 1860:
case 2068:
case 1493:
case 3469:
case 87:
case 1339:
case 1991:
case 428:
case 1569:
case 3851:
case 4063:
case 1273:
case 2165:
case 1685:
case 691:
case 177:
case 474:
case 1183:
case 3725:
case 3282:
case 417:
case 2924:
case 3826:
case 510:
case 3827:
case 4084:
case 351:
case 2892:
case 980:
case 934:
case 1002:
case 861:
case 3211:
case 2684:
case 1164:
case 141:
case 952:
case 46:
case 1621:
case 2811:
case 1695:
case 2700:
case 3169:
case 1193:
case 1572:
case 2798:
case 3781:
case 864:
case 1483:
case 600:
case 3061:
case 144:
case 20:
case 429:
case 3583:
case 332:
case 3076:
case 2465:
case 2882:
case 540:
case 2218:
case 3670:
case 111:
case 2251:
case 1464:
case 1833:
case 3308:
case 3564:
case 4030:
case 2374:
case 3848:
case 3334:
case 3390:
case 255:
case 471:
case 3108:
case 3480:
case 1307:
case 1306:
case 821:
case 1847:
case 2955:
case 2401:
case 3754:
case 3922:
case 276:
case 794:
case 312:
case 1673:
case 3894:
case 1439:
case 1285:
case 1954:
case 2997:
case 2263:
case 879:
case 3369:
case 3539:
case 3850:
case 3312:
case 3559:
case 1861:
case 1908:
case 431:
case 3790:
case 947:
case 3734:
case 2202:
case 883:
case 2144:
case 3515:
case 3381:
case 2398:
case 2587:
case 4078:
case 192:
case 819:
case 2300:
case 1122:
case 2935:
case 2549:
case 372:
case 2962:
case 3210:
case 1145:
case 502:
case 3154:
case 1643:
case 1775:
case 971:
case 168:
case 2021:
case 3047:
case 2231:
case 1345:
case 867:
case 2095:
case 1969:
case 3993:
case 1525:
case 3425:
case 3266:
case 357:
case 4050:
case 3354:
case 1793:
case 84:
case 3769:
case 2198:
case 3442:
case 1542:
case 1322:
case 411:
case 2804:
case 2344:
case 171:
case 1094:
case 968:
case 1220:
case 2524:
case 2452:
case 3112:
case 1706:
case 1213:
case 3435:
case 2383:
case 109:
case 1949:
case 3247:
case 2221:
case 280:
case 3914:
case 743:
case 2816:
case 1332:
case 1626:
case 1562:
case 2139:
case 3786:
case 2817:
case 599:
case 2256:
case 335:
case 2828:
case 1618:
case 2364:
case 3574:
case 1020:
case 1230:
case 1474:
case 2899:
case 2715:
case 3660:
case 993:
case 1101:
case 1013:
case 3617:
case 1924:
case 1752:
case 1301:
case 2002:
case 360:
case 882:
case 3952:
case 850:
case 1892:
case 1132:
case 688:
case 2991:
case 3988:
case 2273:
case 3023:
case 1248:
case 1663:
case 503:
case 2183:
case 522:
case 214:
case 1788:
case 1165:
case 3010:
case 505:
case 3124:
case 375:
case 1602:
case 801:
case 1152:
case 2359:
case 195:
case 1866:
case 2512:
case 389:
case 3205:
case 1765:
case 313:
case 1314:
case 274:
case 2783:
case 2063:
case 2243:
case 645:
case 3386:
case 4068:
case 1429:
case 1278:
case 1732:
case 3820:
case 3598:
case 3809:
case 2581:
case 3186:
case 3149:
case 3092:
case 269:
case 558:
case 1631:
case 1596:
case 2554:
case 1250:
case 2445:
case 333:
case 2236:
case 237:
case 3276:
case 3277:
case 1979:
case 1388:
case 2237:
case 3041:
case 1114:
case 3496:
case 3419:
case 1701:
case 1810:
case 2620:
case 4020:
case 3324:
case 3455:
case 3544:
case 1503:
case 3868:
case 696:
case 3901:
case 1555:
case 2980:
case 2051:
case 2613:
case 3814:
case 1313:
case 871:
case 2784:
case 589:
case 1309:
case 2244:
case 305:
case 1887:
case 1886:
case 575:
case 1849:
case 167:
case 464:
case 847:
case 2763:
case 2688:
case 3691:
case 829:
case 513:
case 2083:
case 14:
case 204:
case 3536:
case 2928:
case 3985:
case 86:
case 2576:
case 2577:
case 1436:
case 3537:
case 2331:
case 1245:
case 2450:
case 533:
case 2131:
case 3310:
case 79:
case 2726:
case 3323:
case 3079:
case 2229:
case 1941:
case 1538:
case 3404:
case 1443:
case 485:
case 148:
case 1824:
case 2614:
case 868:
case 2302:
case 1120:
case 94:
case 2842:
case 662:
case 421:
case 2553:
case 2891:
case 698:
case 2505:
case 1967:
case 1293:
case 3269:
case 3086:
case 3573:
case 1473:
case 399:
case 3087:
case 1966:
case 2731:
case 2126:
case 3767:
case 1582:
case 3141:
case 3865:
case 2059:
case 2384:
case 831:
case 1713:
case 3909:
case 1207:
case 3920:
case 659:
case 483:
case 1558:
case 3680:
case 786:
case 3832:
case 1709:
case 3411:
case 1570:
case 2274:
case 2351:
case 2702:
case 3208:
case 2430:
case 2494:
case 3557:
case 2184:
case 1052:
case 2318:
case 985:
case 3801:
case 2589:
case 322:
case 2632:
case 3968:
case 3672:
case 3710:
case 3595:
case 2327:
case 3341:
case 921:
case 1910:
case 2163:
case 1683:
case 3392:
case 164:
case 1768:
case 4032:
case 759:
case 1185:
case 3008:
case 2420:
case 765:
case 3619:
case 2958:
case 2911:
case 1252:
case 1933:
case 23:
case 2571:
case 630:
case 249:
case 3377:
case 2567:
case 2337:
case 1075:
case 323:
case 302:
case 2622:
case 1812:
case 2336:
case 227:
case 684:
case 3948:
case 1350:
case 1178:
case 3697:
case 2773:
case 1748:
case 3696:
case 2143:
case 218:
case 3287:
case 2803:
case 2343:
case 2855:
case 238:
case 3286:
case 2468:
case 1947:
case 3249:
case 3177:
case 3789:
case 3746:
case 2510:
case 1698:
case 3161:
case 2795:
case 1150:
case 2136:
case 1600:
case 1629:
case 1007:
case 1854:
case 2896:
case 3305:
case 1006:
case 2897:
case 730:
case 1794:
case 2756:
case 1730:
case 1402:
case 2757:
case 784:
case 1750:
case 2121:
case 3147:
case 2195:
case 3776:
case 2736:
case 3189:
case 554:
case 893:
case 670:
case 532:
case 1890:
case 1463:
case 1834:
case 3499:
case 3081:
case 1348:
case 3563:
case 1961:
case 2000:
case 4093:
case 2862:
case 3417:
case 663:
case 401:
case 2157:
case 1517:
case 2156:
case 3416:
case 182:
case 3012:
case 1484:
case 4006:
case 3584:
case 3875:
case 1418:
case 3705:
case 1674:
case 3893:
case 2357:
case 3551:
case 3460:
case 1451:
case 2264:
case 1905:
case 1330:
case 2356:
case 770:
case 1148:
case 278:
case 3635:
case 2743:
case 381:
case 1022:
case 466:
case 2592:
case 4075:
case 1426:
case 3806:
case 2321:
case 3347:
case 763:
case 3346:
case 3389:
case 3526:
case 1427:
case 3662:
case 3978:
case 2390:
case 2334:
case 2848:
case 3374:
case 1260:
case 2564:
case 865:
case 810:
case 488:
case 145:
case 3630:
case 2670:
case 2712:
case 3694:
case 996:
case 3882:
case 57:
case 695:
case 3036:
case 1998:
case 2583:
case 30:
case 2061:
case 3037:
case 1565:
case 1900:
case 1335:
case 2292:
case 1646:
case 746:
case 3798:
case 2781:
case 1362:
case 3700:
case 3432:
case 3729:
case 3811:
case 1647:
case 1162:
case 2539:
case 3043:
case 2369:
case 1004:
case 2945:
case 1299:
case 2830:
case 196:
case 1228:
case 1479:
case 1797:
case 524:
case 4082:
case 1135:
case 945:
case 3648:
case 1796:
case 1821:
case 2611:
case 3284:
case 1895:
case 2005:
case 2480:
case 4058:
case 1501:
case 2134:
case 3174:
case 4011:
case 1755:
case 884:
case 1216:
case 830:
case 3744:
case 2108:
case 1735:
case 316:
case 2604:
case 527:
case 2154:
case 1196:
case 3414:
case 2210:
case 1197:
case 3962:
case 53:
case 272:
case 2638:
case 2223:
case 3549:
case 3586:
case 2975:
case 1486:
case 3840:
case 496:
case 3398:
case 3144:
case 887:
case 3774:
case 1605:
case 2790:
case 1155:
case 18:
case 2559:
case 1836:
case 1119:
case 1058:
case 609:
case 2850:
case 1552:
case 2640:
case 2112:
case 2907:
case 693:
case 3056:
case 2878:
case 1843:
case 3804:
case 1355:
case 1676:
case 3129:
case 3100:
case 538:
case 3650:
case 1661:
case 2181:
case 3198:
case 2442:
case 1677:
case 709:
case 1396:
case 336:
case 257:
case 2266:
case 2491:
case 2425:
case 353:
case 1588:
case 51:
case 2267:
case 2993:
case 143:
case 3095:
case 2271:
case 863:
case 771:
case 1915:
case 2660:
case 3257:
case 2574:
case 3364:
case 2885:
case 692:
case 3256:
case 2749:
case 729:
case 1372:
case 3139:
case 2787:
case 2179:
case 2914:
case 747:
case 2067:
case 142:
case 3295:
case 3221:
case 334:
case 3383:
case 76:
case 352:
case 3942:
case 2010:
case 3685:
case 273:
case 377:
case 2628:
case 1282:
case 1725:
case 1791:
case 507:
case 2699:
case 3183:
case 3493:
case 671:
case 3860:
case 1742:
case 768:
case 2023:
case 3991:
case 3339:
case 3569:
case 2379:
case 2724:
case 2952:
case 4016:
case 4017:
case 341:
case 3002:
case 260:
case 1211:
case 1826:
case 1258:
case 629:
case 1506:
case 1380:
case 1827:
case 194:
case 1983:
case 1772:
case 2387:
case 2965:
case 2386:
case 2500:
case 3243:
case 1142:
case 3063:
case 1099:
case 1191:
case 3972:
case 2932:
case 3783:
case 374:
case 526:
case 504:
case 1964:
case 3084:
case 590:
case 275:
case 451:
case 3764:
case 2124:
case 1017:
case 3613:
case 3115:
case 2544:
case 1240:
case 2455:
case 1780:
case 994:
case 3620:
case 3018:
case 2419:
case 1545:
case 2261:
case 2496:
case 32:
case 2041:
case 1939:
case 442:
case 3237:
case 256:
case 3236:
case 3026:
case 3445:
case 3554:
case 2497:
case 859:
case 2187:
case 3422:
case 3739:
case 1671:
case 1802:
case 631:
case 2371:
case 650:
case 3450:
case 25:
case 3331:
case 4025:
case 1859:
case 2367:
case 4091:
case 682:
case 3928:
case 2536:
case 517:
case 2642:
case 1550:
case 3083:
case 3688:
case 2625:
case 843:
case 1728:
case 2440:
case 1255:
case 3652:
case 3917:
case 3784:
case 170:
case 1624:
case 2814:
case 410:
case 465:
case 3916:
case 1453:
case 3825:
case 963:
case 3891:
case 3553:
case 430:
case 1080:
case 1918:
case 88:
case 1760:
case 3302:
case 2281:
case 3614:
case 970:
case 2792:
case 1578:
case 1927:
case 569:
case 2079:
case 2543:
case 2323:
case 52:
case 1687:
case 2171:
case 537:
case 1649:
case 2166:
case 2741:
case 3151:
case 666:
case 1316:
case 820:
case 3601:
case 3872:
case 1160:
case 2913:
case 487:
case 184:
case 130:
case 4080:
case 701:
case 3118:
case 3059:
case 2865:
case 2141:
case 2482:
case 3127:
case 580:
case 2766:
case 2767:
case 534:
case 3126:
case 1679:
case 896:
case 3731:
case 2087:
case 1328:
case 1433:
case 299:
case 910:
case 2192:
case 3448:
case 3533:
case 1399:
case 2573:
case 2049:
case 2086:
case 965:
case 2723:
case 3665:
case 601:
case 1262:
case 463:
case 2392:
case 1199:
case 1091:
case 2341:
case 3327:
case 1025:
case 1489:
case 1446:
case 2595:
case 577:
case 3546:
case 1447:
case 307:
case 3326:
case 3589:
case 2801:
case 222:
case 470:
case 1902:
case 3318:
case 110:
case 3184:
case 2557:
case 1116:
case 3494:
case 1839:
case 2470:
case 3702:
case 3351:
case 541:
case 2024:
case 3274:
case 2556:
case 2290:
case 1062:
case 462:
case 2696:
case 1654:
case 2697:
case 1138:
case 1471:
case 516:
case 2948:
case 1467:
case 223:
case 764:
case 1035:
case 349:
case 3571:
case 2531:
case 1973:
case 2603:
case 3911:
case 1513:
case 4019:
case 2655:
case 1898:
case 3074:
case 2090:
case 1340:
case 1800:
case 2619:
case 3420:
case 1770:
case 2822:
case 1612:
case 3897:
case 2353:
case 721:
case 3259:
case 1957:
case 186:
case 2994:
case 1956:
case 3819:
case 3136:
case 2747:
case 536:
case 553:
case 2161:
case 31:
case 3510:
case 2746:
case 2789:
case 3523:
case 2249:
case 2286:
case 1844:
case 3803:
case 1423:
case 2875:
case 962:
case 851:
case 639:
case 2012:
case 361:
case 3940:
case 555:
case 1740:
case 3862:
case 2417:
case 3485:
case 1937:
case 3029:
case 2428:
case 2333:
case 2950:
case 2081:
case 1585:
case 1936:
case 2146:
case 2761:
case 1382:
case 2189:
case 1669:
case 3737:
case 3693:
case 3736:
case 2147:
case 3121:
case 306:
case 1441:
case 1182:
case 3938:
case 2054:
case 1096:
case 2807:
case 3283:
case 459:
case 2347:
case 2806:
case 576:
case 2527:
case 4035:
case 508:
case 3173:
case 4062:
case 162:
case 3675:
case 1704:
case 378:
case 74:
case 1492:
case 3044:
case 1003:
case 225:
case 1111:
case 1370:
case 3264:
case 2460:
case 2551:
case 1055:
case 2705:
case 2518:
case 1019:
case 1608:
case 619:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751695201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,];
var gg_b = "1751695201/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
