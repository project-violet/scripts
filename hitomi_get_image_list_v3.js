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
case 2775:
case 270:
case 2145:
case 4037:
case 2828:
case 3468:
case 2692:
case 111:
case 1364:
case 1750:
case 3473:
case 684:
case 366:
case 4042:
case 1265:
case 1298:
case 1044:
case 1964:
case 3439:
case 2246:
case 3576:
case 4080:
case 1992:
case 1166:
case 3757:
case 3495:
case 2407:
case 805:
case 889:
case 439:
case 2015:
case 1316:
case 3246:
case 2439:
case 1958:
case 2866:
case 2786:
case 196:
case 104:
case 1729:
case 572:
case 1535:
case 3664:
case 3145:
case 3814:
case 1128:
case 1358:
case 370:
case 3775:
case 2468:
case 3828:
case 2022:
case 1114:
case 136:
case 3585:
case 2658:
case 3692:
case 499:
case 266:
case 3454:
case 281:
case 1400:
case 1599:
case 836:
case 3396:
case 1683:
case 3131:
case 900:
case 3560:
case 2155:
case 344:
case 1026:
case 1831:
case 2218:
case 1181:
case 1740:
case 3633:
case 3648:
case 322:
case 1567:
case 3194:
case 1209:
case 2256:
case 2983:
case 956:
case 1572:
case 896:
case 804:
case 3996:
case 3162:
case 219:
case 1782:
case 3177:
case 1612:
case 1862:
case 2925:
case 3256:
case 2679:
case 1242:
case 4065:
case 2732:
case 3287:
case 2000:
case 2162:
case 2996:
case 189:
case 1933:
case 1379:
case 923:
case 1948:
case 2177:
case 1422:
case 1271:
case 3601:
case 2131:
case 1855:
case 1333:
case 3218:
case 537:
case 457:
case 662:
case 65:
case 244:
case 3383:
case 3230:
case 2870:
case 1039:
case 1803:
case 811:
case 461:
case 2761:
case 478:
case 2648:
case 410:
case 2932:
case 355:
case 2361:
case 438:
case 2210:
case 1451:
case 3568:
case 2423:
case 1661:
case 577:
case 2485:
case 3725:
case 514:
case 1178:
case 2947:
case 2238:
case 2243:
case 28:
case 3878:
case 1733:
case 3640:
case 3111:
case 1632:
case 2802:
case 3008:
case 1779:
case 2041:
case 498:
case 3712:
case 2961:
case 2507:
case 1589:
case 964:
case 2526:
case 1382:
case 2849:
case 3347:
case 1217:
case 4021:
case 2008:
case 1913:
case 2476:
case 2539:
case 921:
case 2595:
case 71:
case 3332:
case 3961:
case 3269:
case 2712:
case 3526:
case 1940:
case 1060:
case 501:
case 1288:
case 813:
case 3932:
case 3423:
case 2613:
case 3067:
case 3947:
case 2725:
case 3485:
case 3554:
case 3796:
case 1499:
case 2878:
case 3243:
case 38:
case 2184:
case 2304:
case 3993:
case 354:
case 227:
case 113:
case 4017:
case 1604:
case 3274:
case 3650:
case 2253:
case 188:
case 667:
case 452:
case 515:
case 2957:
case 2834:
case 81:
case 46:
case 1290:
case 1467:
case 3636:
case 3975:
case 390:
case 946:
case 3859:
case 713:
case 2127:
case 965:
case 3035:
case 2904:
case 1716:
case 776:
case 1686:
case 788:
case 4088:
case 1657:
case 479:
case 3106:
case 3386:
case 2099:
case 3357:
case 1806:
case 760:
case 2975:
case 1191:
case 2035:
case 2393:
case 2419:
case 1336:
case 3629:
case 3051:
case 1936:
case 1120:
case 1884:
case 1764:
case 160:
case 327:
case 64:
case 3205:
case 3820:
case 3544:
case 1515:
case 1076:
case 2375:
case 218:
case 2922:
case 321:
case 134:
case 1785:
case 7:
case 3165:
case 3644:
case 706:
case 150:
case 264:
case 2315:
case 642:
case 3735:
case 2751:
case 485:
case 409:
case 2214:
case 1622:
case 734:
case 3266:
case 829:
case 4055:
case 194:
case 3198:
case 4003:
case 2846:
case 98:
case 2152:
case 2479:
case 1557:
case 4031:
case 1412:
case 1586:
case 1064:
case 955:
case 3322:
case 3846:
case 1146:
case 1425:
case 221:
case 462:
case 3922:
case 812:
case 835:
case 3433:
case 1504:
case 2165:
case 3550:
case 686:
case 2735:
case 678:
case 3228:
case 4062:
case 3315:
case 364:
case 1483:
case 1344:
case 3214:
case 2401:
case 580:
case 382:
case 3270:
case 112:
case 3708:
case 1079:
case 625:
case 2458:
case 1231:
case 2171:
case 2300:
case 2513:
case 2180:
case 2741:
case 484:
case 1373:
case 453:
case 265:
case 3464:
case 2824:
case 1262:
case 4045:
case 1339:
case 927:
case 712:
case 593:
case 2137:
case 3025:
case 2887:
case 2767:
case 3109:
case 3389:
case 507:
case 1048:
case 1033:
case 1395:
case 2096:
case 2142:
case 1809:
case 2856:
case 1954:
case 2626:
case 3900:
case 954:
case 1689:
case 129:
case 1547:
case 3137:
case 639:
case 1001:
case 2389:
case 1156:
case 3639:
case 3887:
case 930:
case 2025:
case 3856:
case 3772:
case 1187:
case 3142:
case 806:
case 894:
case 1532:
case 1130:
case 1926:
case 2654:
case 3540:
case 426:
case 3673:
case 729:
case 834:
case 3830:
case 1561:
case 2012:
case 3513:
case 1354:
case 1124:
case 3300:
case 1255:
case 2464:
case 1871:
case 1760:
case 3278:
case 1608:
case 4006:
case 2548:
case 22:
case 2843:
case 1360:
case 2450:
case 1919:
case 3700:
case 1754:
case 874:
case 140:
case 66:
case 2188:
case 3263:
case 817:
case 3501:
case 1013:
case 3372:
case 1707:
case 2869:
case 2619:
case 3429:
case 1040:
case 740:
case 2117:
case 2202:
case 679:
case 3061:
case 3249:
case 1319:
case 2579:
case 1493:
case 1169:
case 1795:
case 2429:
case 945:
case 3117:
case 775:
case 2941:
case 2061:
case 1817:
case 1739:
case 1525:
case 44:
case 3843:
case 32:
case 647:
case 2278:
case 3838:
case 2700:
case 1404:
case 3308:
case 175:
case 3660:
case 3188:
case 3810:
case 1768:
case 1888:
case 2501:
case 2967:
case 516:
case 1744:
case 256:
case 2440:
case 2234:
case 1174:
case 2335:
case 2093:
case 638:
case 3874:
case 3715:
case 2558:
case 3685:
case 3897:
case 2220:
case 1976:
case 919:
case 443:
case 1635:
case 323:
case 1197:
case 3564:
case 200:
case 2516:
case 2482:
case 3722:
case 728:
case 3951:
case 3190:
case 1890:
case 1050:
case 698:
case 3516:
case 2722:
case 2190:
case 922:
case 1206:
case 2951:
case 2004:
case 717:
case 1432:
case 774:
case 1227:
case 3234:
case 356:
case 1153:
case 3558:
case 2715:
case 663:
case 2874:
case 3093:
case 2057:
case 2623:
case 2897:
case 2564:
case 223:
case 1105:
case 117:
case 840:
case 1385:
case 2237:
case 2068:
case 3782:
case 1747:
case 917:
case 1162:
case 3877:
case 1996:
case 974:
case 2933:
case 3054:
case 692:
case 1194:
case 3567:
case 1679:
case 2508:
case 4046:
case 615:
case 1881:
case 1648:
case 567:
case 3625:
case 122:
case 2039:
case 1870:
case 3301:
case 3170:
case 1633:
case 3181:
case 3026:
case 144:
case 1560:
case 431:
case 2348:
case 1396:
case 2280:
case 3007:
case 2333:
case 2095:
case 2271:
case 3713:
case 2855:
case 3683:
case 3415:
case 2625:
case 1912:
case 719:
case 2181:
case 416:
case 1103:
case 866:
case 1230:
case 1383:
case 1444:
case 3348:
case 1218:
case 1089:
case 1325:
case 1155:
case 2831:
case 54:
case 2683:
case 3855:
case 1224:
case 3271:
case 3333:
case 2007:
case 3280:
case 119:
case 3237:
case 3068:
case 3933:
case 508:
case 1312:
case 2572:
case 2054:
case 2209:
case 1256:
case 2567:
case 928:
case 2729:
case 975:
case 781:
case 766:
case 204:
case 4018:
case 1757:
case 469:
case 3992:
case 819:
case 4024:
case 1576:
case 2316:
case 2252:
case 3044:
case 3964:
case 3298:
case 1473:
case 4087:
case 2599:
case 3750:
case 3265:
case 2916:
case 2400:
case 311:
case 614:
case 1658:
case 3551:
case 2114:
case 1022:
case 2128:
case 658:
case 145:
case 1454:
case 2265:
case 2750:
case 3599:
case 822:
case 1692:
case 1523:
case 2551:
case 3845:
case 1145:
case 2392:
case 844:
case 3128:
case 304:
case 1407:
case 3958:
case 402:
case 1793:
case 3316:
case 1246:
case 2964:
case 2044:
case 3252:
case 718:
case 730:
case 1035:
case 0:
case 2950:
case 1419:
case 2336:
case 754:
case 1975:
case 190:
case 1099:
case 3472:
case 3467:
case 3290:
case 3085:
case 3159:
case 783:
case 4038:
case 2693:
case 2792:
case 620:
case 3758:
case 130:
case 1375:
case 3221:
case 1650:
case 88:
case 1274:
case 3604:
case 388:
case 2675:
case 790:
case 2884:
case 2764:
case 4069:
case 183:
case 1993:
case 2936:
case 3441:
case 2350:
case 3076:
case 3515:
case 1957:
case 1253:
case 995:
case 1544:
case 2929:
case 855:
case 1820:
case 43:
case 55:
case 1205:
case 213:
case 360:
case 3675:
case 3350:
case 49:
case 2657:
case 1891:
case 697:
case 3191:
case 3950:
case 1904:
case 1127:
case 727:
case 3693:
case 2085:
case 603:
case 3827:
case 1386:
case 2467:
case 2940:
case 1712:
case 1476:
case 1008:
case 493:
case 2102:
case 4053:
case 755:
case 2499:
case 1573:
case 2313:
case 2500:
case 3733:
case 3748:
case 433:
case 2340:
case 1783:
case 1613:
case 1863:
case 2701:
case 827:
case 2435:
case 648:
case 2288:
case 2733:
case 994:
case 906:
case 1796:
case 3313:
case 18:
case 1243:
case 1072:
case 2178:
case 1067:
case 1947:
case 2661:
case 468:
case 883:
case 1423:
case 9:
case 3340:
case 1361:
case 672:
case 2163:
case 950:
case 3060:
case 1526:
case 78:
case 1041:
case 934:
case 2149:
case 659:
case 3382:
case 890:
case 3217:
case 1347:
case 3102:
case 4074:
case 2307:
case 3395:
case 3033:
case 598:
case 2187:
case 669:
case 2326:
case 1025:
case 1389:
case 3294:
case 1083:
case 2001:
case 2547:
case 1607:
case 3277:
case 3262:
case 4028:
case 1626:
case 2118:
case 2880:
case 2871:
case 477:
case 2354:
case 3939:
case 3373:
case 538:
case 458:
case 312:
case 510:
case 1989:
case 3368:
case 3600:
case 2130:
case 182:
case 165:
case 3255:
case 3118:
case 3760:
case 1818:
case 1741:
case 1180:
case 2373:
case 4066:
case 1300:
case 3354:
case 3124:
case 2995:
case 821:
case 3907:
case 563:
case 3561:
case 1830:
case 3926:
case 3130:
case 1673:
case 2368:
case 295:
case 3187:
case 1856:
case 765:
case 2809:
case 2033:
case 3532:
case 976:
case 2395:
case 1096:
case 2294:
case 401:
case 2048:
case 2968:
case 1639:
case 3156:
case 1767:
case 1137:
case 1582:
case 1416:
case 2339:
case 913:
case 3719:
case 3058:
case 91:
case 3593:
case 1198:
case 306:
case 579:
case 691:
case 2064:
case 1529:
case 2944:
case 2557:
case 3622:
case 492:
case 721:
case 3:
case 2483:
case 3575:
case 3016:
case 56:
case 865:
case 432:
case 1644:
case 631:
case 3615:
case 121:
case 334:
case 3785:
case 3483:
case 3344:
case 1214:
case 616:
case 250:
case 164:
case 1433:
case 2496:
case 1550:
case 3504:
case 2785:
case 234:
case 2615:
case 1448:
case 1536:
case 2593:
case 3092:
case 2898:
case 3146:
case 3852:
case 2058:
case 4070:
case 1322:
case 3944:
case 3064:
case 2227:
case 3890:
case 40:
case 2206:
case 1259:
case 607:
case 1722:
case 3376:
case 274:
case 633:
case 1564:
case 3197:
case 123:
case 217:
case 3635:
case 2105:
case 3976:
case 1057:
case 1623:
case 1874:
case 3821:
case 3036:
case 2461:
case 1685:
case 328:
case 525:
case 680:
case 2153:
case 3744:
case 3699:
case 3174:
case 1121:
case 1351:
case 317:
case 2197:
case 3029:
case 599:
case 1413:
case 1805:
case 1220:
case 1853:
case 472:
case 2821:
case 1335:
case 700:
case 1440:
case 2174:
case 3153:
case 2744:
case 3323:
case 1935:
case 2890:
case 3432:
case 3923:
case 3206:
case 787:
case 1676:
case 3985:
case 459:
case 539:
case 1075:
case 1516:
case 1291:
case 2667:
case 2817:
case 2739:
case 1249:
case 1061:
case 3960:
case 2486:
case 3726:
case 1367:
case 1372:
case 2457:
case 2512:
case 4020:
case 3707:
case 936:
case 887:
case 2583:
case 2888:
case 2110:
case 3082:
case 4091:
case 340:
case 542:
case 420:
case 1972:
case 2773:
case 1341:
case 3211:
case 3919:
case 3596:
case 3754:
case 2143:
case 1700:
case 2138:
case 524:
case 2525:
case 3888:
case 2082:
case 3110:
case 823:
case 375:
case 586:
case 561:
case 2475:
case 240:
case 1660:
case 1188:
case 1533:
case 2596:
case 1450:
case 2919:
case 3404:
case 2608:
case 1548:
case 4059:
case 911:
case 1579:
case 3667:
case 1202:
case 1117:
case 3672:
case 69:
case 2726:
case 403:
case 1789:
case 3795:
case 2707:
case 2013:
case 3512:
case 3457:
case 2921:
case 2229:
case 925:
case 2390:
case 1257:
case 2084:
case 2566:
case 308:
case 505:
case 1690:
case 80:
case 589:
case 2876:
case 3798:
case 1204:
case 3250:
case 3765:
case 2027:
case 3199:
case 627:
case 137:
case 42:
case 1059:
case 251:
case 2990:
case 3514:
case 797:
case 3697:
case 3135:
case 2605:
case 3823:
case 2199:
case 3027:
case 3653:
case 683:
case 2765:
case 3006:
case 3478:
case 24:
case 3321:
case 3990:
case 630:
case 2528:
case 3605:
case 2135:
case 120:
case 2697:
case 3390:
case 3566:
case 3084:
case 690:
case 2236:
case 1176:
case 1746:
case 4061:
case 999:
case 2798:
case 3282:
case 772:
case 1938:
case 3317:
case 1247:
case 1943:
case 1063:
case 1427:
case 1232:
case 3988:
case 2742:
case 1369:
case 1910:
case 596:
case 504:
case 3709:
case 1261:
case 3388:
case 759:
case 3108:
case 456:
case 2581:
case 1503:
case 2570:
case 3240:
case 1555:
case 243:
case 3420:
case 2860:
case 68:
case 2771:
case 1484:
case 655:
case 2108:
case 837:
case 148:
case 1730:
case 343:
case 1160:
case 1841:
case 423:
case 1724:
case 70:
case 4057:
case 1531:
case 3860:
case 1577:
case 2317:
case 1119:
case 3742:
case 4004:
case 1867:
case 897:
case 1756:
case 1594:
case 10:
case 3459:
case 2309:
case 1930:
case 938:
case 3807:
case 1107:
case 1387:
case 2466:
case 3980:
case 1609:
case 2549:
case 2717:
case 1070:
case 2687:
case 619:
case 3337:
case 1081:
case 3502:
case 3100:
case 1154:
case 1324:
case 35:
case 3248:
case 1318:
case 1800:
case 858:
case 1225:
case 209:
case 998:
case 2624:
case 1330:
case 1956:
case 2909:
case 1445:
case 1987:
case 814:
case 2788:
case 464:
case 2563:
case 2618:
case 1173:
case 2233:
case 1511:
case 1743:
case 3630:
case 2371:
case 262:
case 2854:
case 341:
case 792:
case 1738:
case 3578:
case 2248:
case 2937:
case 421:
case 588:
case 3201:
case 3624:
case 1710:
case 3788:
case 115:
case 3189:
case 3055:
case 963:
case 2342:
case 1637:
case 2279:
case 3656:
case 1139:
case 2980:
case 3003:
case 2502:
case 3687:
case 732:
case 3717:
case 2398:
case 3122:
case 1822:
case 2045:
case 3216:
case 1346:
case 1527:
case 2646:
case 2559:
case 1506:
case 670:
case 3844:
case 3721:
case 2481:
case 446:
case 1403:
case 2470:
case 1815:
case 1665:
case 1144:
case 832:
case 815:
case 465:
case 3952:
case 2264:
case 1455:
case 2998:
case 51:
case 284:
case 1066:
case 1584:
case 645:
case 158:
case 2115:
case 2844:
case 226:
case 2534:
case 3481:
case 3998:
case 3264:
case 2952:
case 666:
case 1431:
case 2520:
case 3365:
case 4083:
case 2122:
case 2352:
case 3398:
case 1014:
case 3965:
case 3045:
case 947:
case 1028:
case 2591:
case 714:
case 777:
case 1652:
case 1494:
case 3646:
case 3659:
case 1136:
case 3546:
case 941:
case 2193:
case 600:
case 3984:
case 1417:
case 529:
case 3021:
case 3836:
case 985:
case 3410:
case 3906:
case 2620:
case 3223:
case 2745:
case 363:
case 210:
case 1235:
case 1488:
case 1299:
case 3384:
case 1150:
case 4072:
case 1804:
case 3090:
case 3285:
case 171:
case 168:
case 1714:
case 2223:
case 1684:
case 3620:
case 2906:
case 1959:
case 1875:
case 180:
case 310:
case 83:
case 512:
case 535:
case 2927:
case 3745:
case 455:
case 2443:
case 2384:
case 623:
case 2285:
case 2090:
case 133:
case 2850:
case 95:
case 3193:
case 962:
case 2546:
case 780:
case 1606:
case 2659:
case 3276:
case 193:
case 2021:
case 2836:
case 1627:
case 1359:
case 2306:
case 1129:
case 107:
case 2186:
case 2327:
case 595:
case 89:
case 3587:
case 893:
case 1542:
case 3794:
case 1537:
case 19:
case 984:
case 3882:
case 2088:
case 3762:
case 2911:
case 1847:
case 2260:
case 3518:
case 2755:
case 427:
case 1902:
case 1113:
case 1571:
case 3524:
case 2311:
case 79:
case 3678:
case 26:
case 3161:
case 252:
case 3840:
case 1861:
case 1781:
case 3530:
case 1770:
case 3453:
case 534:
case 1378:
case 2518:
case 2663:
case 3260:
case 1949:
case 1241:
case 2731:
case 868:
case 2840:
case 2161:
case 418:
case 36:
case 3017:
case 3474:
case 1421:
case 1963:
case 3602:
case 1272:
case 926:
case 2794:
case 2556:
case 1509:
case 1038:
case 1490:
case 2777:
case 1978:
case 506:
case 4035:
case 1349:
case 2762:
case 3088:
case 102:
case 2931:
case 1179:
case 3446:
case 951:
case 1694:
case 1749:
case 2362:
case 339:
case 2377:
case 3879:
case 1662:
case 1812:
case 2394:
case 3903:
case 3226:
case 2071:
case 3569:
case 2295:
case 891:
case 1631:
case 702:
case 3510:
case 2268:
case 3303:
case 831:
case 1883:
case 2273:
case 2196:
case 3681:
case 3543:
case 3848:
case 3711:
case 2042:
case 3254:
case 1200:
case 2331:
case 3355:
case 399:
case 3538:
case 665:
case 2977:
case 1148:
case 517:
case 3994:
case 3268:
case 3037:
case 2510:
case 4022:
case 325:
case 873:
case 445:
case 3331:
case 2848:
case 2543:
case 2681:
case 466:
case 3273:
case 1603:
case 816:
case 3977:
case 769:
case 2833:
case 908:
case 2125:
case 3362:
case 94:
case 3931:
case 3239:
case 2879:
case 1498:
case 1702:
case 2955:
case 3377:
case 2226:
case 3394:
case 1018:
case 3295:
case 2207:
case 2569:
case 1024:
case 77:
case 3065:
case 3945:
case 3487:
case 2727:
case 1928:
case 773:
case 1442:
case 2706:
case 1914:
case 3456:
case 869:
case 1116:
case 357:
case 224:
case 2597:
case 173:
case 2864:
case 2614:
case 664:
case 1328:
case 1215:
case 242:
case 386:
case 361:
case 575:
case 2574:
case 3098:
case 2892:
case 3430:
case 2052:
case 3553:
case 3628:
case 2418:
case 131:
case 257:
case 3784:
case 1720:
case 1966:
case 286:
case 2345:
case 422:
case 2553:
case 3052:
case 2858:
case 1734:
case 3892:
case 2098:
case 1521:
case 1366:
case 731:
case 1409:
case 3706:
case 802:
case 191:
case 2666:
case 991:
case 1420:
case 1213:
case 4029:
case 1917:
case 3338:
case 61:
case 2688:
case 474:
case 2841:
case 2002:
case 1240:
case 1434:
case 570:
case 851:
case 248:
case 3910:
case 1709:
case 2756:
case 2594:
case 20:
case 2617:
case 2867:
case 3427:
case 2787:
case 1011:
case 3369:
case 1988:
case 3943:
case 2562:
case 931:
case 1282:
case 2577:
case 359:
case 1317:
case 3247:
case 3872:
case 3756:
case 1167:
case 743:
case 1742:
case 1172:
case 2427:
case 3867:
case 3562:
case 973:
case 2247:
case 2938:
case 1819:
case 1771:
case 2484:
case 3724:
case 1141:
case 1610:
case 1860:
case 3531:
case 3841:
case 2338:
case 1570:
case 2310:
case 1581:
case 1643:
case 3002:
case 3730:
case 545:
case 84:
case 2049:
case 220:
case 2275:
case 475:
case 3545:
case 1528:
case 843:
case 1514:
case 2397:
case 3059:
case 3305:
case 337:
case 2411:
case 1199:
case 1885:
case 3905:
case 1798:
case 108:
case 1236:
case 97:
case 3257:
case 2974:
case 303:
case 3953:
case 3034:
case 3997:
case 1876:
case 767:
case 1752:
case 3293:
case 3176:
case 3746:
case 2690:
case 3020:
case 4013:
case 1566:
case 2286:
case 2953:
case 1229:
case 1921:
case 440:
case 1463:
case 3851:
case 2545:
case 3275:
case 167:
case 1321:
case 2835:
case 2123:
case 902:
case 237:
case 1006:
case 151:
case 2899:
case 1653:
case 1027:
case 2621:
case 58:
case 3946:
case 3066:
case 2431:
case 809:
case 3584:
case 885:
case 3797:
case 3455:
case 636:
case 1721:
case 3815:
case 1115:
case 1258:
case 258:
case 2494:
case 2652:
case 2462:
case 2028:
case 3822:
case 429:
case 2014:
case 1352:
case 4001:
case 784:
case 201:
case 2698:
case 753:
case 1965:
case 1045:
case 2346:
case 93:
case 2822:
case 3028:
case 3477:
case 2584:
case 1365:
case 184:
case 3431:
case 2066:
case 314:
case 153:
case 3705:
case 611:
case 2797:
case 2665:
case 3753:
case 2815:
case 2403:
case 2774:
case 555:
case 4079:
case 85:
case 3987:
case 3445:
case 232:
case 1428:
case 2168:
case 2680:
case 1077:
case 2710:
case 3956:
case 1414:
case 527:
case 15:
case 3318:
case 162:
case 3225:
case 2738:
case 3800:
case 1371:
case 1100:
case 1233:
case 1380:
case 2642:
case 605:
case 4092:
case 933:
case 3609:
case 2889:
case 3107:
case 2637:
case 1342:
case 2769:
case 3212:
case 75:
case 762:
case 3930:
case 3356:
case 4064:
case 3642:
case 2081:
case 1003:
case 2070:
case 1687:
case 1656:
case 3139:
case 4058:
case 2924:
case 709:
case 971:
case 968:
case 1466:
case 2387:
case 741:
case 3195:
case 4:
case 2107:
case 3637:
case 3889:
case 590:
case 1895:
case 1189:
case 2126:
case 2356:
case 2930:
case 450:
case 530:
case 1788:
case 1618:
case 1563:
case 332:
case 2445:
case 315:
case 1624:
case 185:
case 2956:
case 1201:
case 3168:
case 3738:
case 2225:
case 434:
case 554:
case 3173:
case 1630:
case 3511:
case 2154:
case 3743:
case 2421:
case 3781:
case 3861:
case 3770:
case 4076:
case 564:
case 1678:
case 675:
case 1840:
case 1161:
case 1731:
case 1524:
case 2241:
case 2069:
case 838:
case 147:
case 2378:
case 3902:
case 810:
case 1518:
case 1762:
case 914:
case 2978:
case 1777:
case 2038:
case 2267:
case 2490:
case 3542:
case 2963:
case 1132:
case 2272:
case 1911:
case 1219:
case 179:
case 2182:
case 3010:
case 4023:
case 29:
case 2302:
case 3267:
case 2832:
case 3038:
case 3963:
case 1017:
case 2611:
case 2781:
case 3421:
case 476:
case 1474:
case 152:
case 779:
case 901:
case 16:
case 2571:
case 3069:
case 3241:
case 1311:
case 23:
case 863:
case 1755:
case 2902:
case 521:
case 413:
case 674:
case 3804:
case 233:
case 1850:
case 41:
case 1438:
case 565:
case 3299:
case 3320:
case 2565:
case 2728:
case 3235:
case 163:
case 2959:
case 2251:
case 280:
case 992:
case 1223:
case 3766:
case 1157:
case 3886:
case 3857:
case 1186:
case 2129:
case 3097:
case 915:
case 2005:
case 3934:
case 207:
case 3417:
case 293:
case 3074:
case 1836:
case 763:
case 1021:
case 1546:
case 2606:
case 1659:
case 1984:
case 1829:
case 307:
case 3129:
case 1691:
case 2074:
case 3893:
case 738:
case 3627:
case 2552:
case 1276:
case 2136:
case 3606:
case 1193:
case 271:
case 2804:
case 2150:
case 1634:
case 2299:
case 2235:
case 3728:
case 1745:
case 847:
case 380:
case 3251:
case 3959:
case 316:
case 1244:
case 1858:
case 3328:
case 4039:
case 2966:
case 2192:
case 161:
case 3215:
case 1345:
case 3480:
case 1424:
case 4095:
case 2164:
case 52:
case 373:
case 3116:
case 489:
case 3222:
case 291:
case 786:
case 1666:
case 761:
case 2590:
case 948:
case 4073:
case 1065:
case 757:
case 3442:
case 3928:
case 2116:
case 3791:
case 391:
case 2222:
case 606:
case 694:
case 2914:
case 3409:
case 2759:
case 3366:
case 1052:
case 3521:
case 1892:
case 1574:
case 142:
case 2215:
case 3046:
case 2158:
case 650:
case 1614:
case 1864:
case 1784:
case 2480:
case 1628:
case 634:
case 3645:
case 124:
case 331:
case 1009:
case 2056:
case 3778:
case 27:
case 3148:
case 2896:
case 842:
case 1538:
case 199:
case 1833:
case 587:
case 2603:
case 3133:
case 1670:
case 3200:
case 2087:
case 2465:
case 1254:
case 739:
case 2655:
case 3763:
case 1510:
case 2101:
case 2381:
case 2024:
case 1569:
case 1903:
case 404:
case 2981:
case 3662:
case 2018:
case 920:
case 3517:
case 2030:
case 2498:
case 629:
case 3179:
case 1446:
case 302:
case 3749:
case 3694:
case 1080:
case 2677:
case 695:
case 369:
case 1071:
case 3024:
case 3970:
case 2812:
case 3018:
case 2662:
case 3289:
case 1394:
case 3702:
case 3498:
case 3030:
case 4044:
case 1377:
case 2452:
case 2749:
case 202:
case 937:
case 1931:
case 886:
case 878:
case 411:
case 2148:
case 37:
case 3056:
case 997:
case 3465:
case 2200:
case 1331:
case 2133:
case 1273:
case 1196:
case 1962:
case 1801:
case 3655:
case 857:
case 635:
case 1037:
case 3370:
case 3101:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746529202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,];
var gg_b = "1746529202/";

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
