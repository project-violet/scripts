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
var o = 0;
switch (g) {
case 230:
case 1157:
case 210:
case 2700:
case 2047:
case 3075:
case 2031:
case 2600:
case 2598:
case 1091:
case 929:
case 1538:
case 423:
case 3648:
case 2809:
case 2368:
case 3217:
case 2168:
case 3442:
case 2171:
case 2371:
case 589:
case 3966:
case 1123:
case 1781:
case 3121:
case 3884:
case 1323:
case 3850:
case 3683:
case 859:
case 3268:
case 2025:
case 2117:
case 1642:
case 2317:
case 1920:
case 2579:
case 2653:
case 2061:
case 687:
case 3595:
case 2753:
case 2078:
case 2854:
case 1571:
case 1287:
case 150:
case 3365:
case 2645:
case 1907:
case 3165:
case 2557:
case 1398:
case 2745:
case 691:
case 1232:
case 3562:
case 3704:
case 76:
case 1974:
case 2727:
case 77:
case 1379:
case 474:
case 650:
case 807:
case 1179:
case 3028:
case 2265:
case 1229:
case 3392:
case 187:
case 2099:
case 833:
case 3192:
case 1039:
case 813:
case 636:
case 509:
case 2544:
case 616:
case 3102:
case 2009:
case 3915:
case 3302:
case 3626:
case 3893:
case 2831:
case 244:
case 3556:
case 568:
case 253:
case 1997:
case 2776:
case 2676:
case 1869:
case 3050:
case 2982:
case 116:
case 557:
case 3316:
case 613:
case 1205:
case 329:
case 1144:
case 4033:
case 1985:
case 607:
case 850:
case 2080:
case 3430:
case 1949:
case 541:
case 3952:
case 1839:
case 2216:
case 107:
case 3540:
case 2967:
case 891:
case 133:
case 3046:
case 219:
case 2464:
case 1630:
case 3003:
case 1001:
case 1958:
case 2690:
case 1496:
case 2913:
case 2436:
case 3857:
case 4038:
case 665:
case 152:
case 3580:
case 1927:
case 994:
case 2707:
case 983:
case 2040:
case 3796:
case 489:
case 175:
case 1150:
case 3624:
case 652:
case 1184:
case 165:
case 1821:
case 3823:
case 3696:
case 2607:
case 1384:
case 3210:
case 3008:
case 2862:
case 1209:
case 1953:
case 3951:
case 2620:
case 1510:
case 3044:
case 232:
case 2942:
case 3509:
case 212:
case 740:
case 227:
case 2214:
case 2981:
case 4068:
case 3879:
case 797:
case 1254:
case 2887:
case 303:
case 1346:
case 1280:
case 322:
case 3101:
case 986:
case 3301:
case 3314:
case 2832:
case 3770:
case 2005:
case 3919:
case 4017:
case 2584:
case 526:
case 2452:
case 1225:
case 1802:
case 2073:
case 2095:
case 3578:
case 3418:
case 1667:
case 852:
case 478:
case 3886:
case 3612:
case 3391:
case 2133:
case 1393:
case 2333:
case 1375:
case 582:
case 3369:
case 3808:
case 2749:
case 2685:
case 1572:
case 917:
case 3023:
case 922:
case 1412:
case 1021:
case 2528:
case 3467:
case 1718:
case 2840:
case 409:
case 1231:
case 3655:
case 1065:
case 3322:
case 394:
case 2239:
case 1816:
case 2593:
case 1682:
case 1299:
case 3098:
case 1976:
case 1641:
case 41:
case 3706:
case 480:
case 945:
case 734:
case 2797:
case 1741:
case 1637:
case 3743:
case 3272:
case 3788:
case 441:
case 3934:
case 2805:
case 3482:
case 3139:
case 3441:
case 1443:
case 3437:
case 457:
case 1278:
case 2372:
case 1406:
case 331:
case 573:
case 3710:
case 996:
case 258:
case 787:
case 3979:
case 2987:
case 1709:
case 4077:
case 2484:
case 125:
case 2207:
case 1992:
case 17:
case 2932:
case 750:
case 221:
case 2842:
case 3409:
case 625:
case 34:
case 1570:
case 304:
case 2196:
case 3307:
case 3998:
case 2060:
case 4004:
case 2324:
case 3270:
case 1845:
case 566:
case 3923:
case 642:
case 2403:
case 1680:
case 3851:
case 2446:
case 1780:
case 1654:
case 372:
case 3064:
case 355:
case 2714:
case 4059:
case 618:
case 3957:
case 2170:
case 638:
case 267:
case 1090:
case 2030:
case 3454:
case 2995:
case 1166:
case 2220:
case 4083:
case 733:
case 2691:
case 1000:
case 713:
case 1631:
case 2112:
case 3733:
case 2312:
case 451:
case 2956:
case 1506:
case 87:
case 3537:
case 3158:
case 3358:
case 86:
case 2475:
case 3431:
case 2081:
case 1916:
case 1267:
case 3944:
case 3185:
case 955:
case 1625:
case 2042:
case 1472:
case 1761:
case 2106:
case 3197:
case 2343:
case 3051:
case 716:
case 1778:
case 1661:
case 2722:
case 1089:
case 2940:
case 911:
case 2297:
case 3478:
case 3206:
case 1115:
case 1241:
case 1890:
case 3461:
case 1902:
case 435:
case 2188:
case 1282:
case 2013:
case 2739:
case 1673:
case 3671:
case 3946:
case 181:
case 2735:
case 1417:
case 1773:
case 2348:
case 1795:
case 1874:
case 2148:
case 1901:
case 3462:
case 3903:
case 3300:
case 197:
case 3100:
case 370:
case 1914:
case 1281:
case 2423:
case 2067:
case 1085:
case 3473:
case 3495:
case 1504:
case 2954:
case 2359:
case 4070:
case 3248:
case 3052:
case 814:
case 2159:
case 1468:
case 3617:
case 834:
case 2721:
case 2200:
case 681:
case 463:
case 2383:
case 3836:
case 473:
case 285:
case 2457:
case 2018:
case 3513:
case 2621:
case 1807:
case 140:
case 2082:
case 3638:
case 3738:
case 2665:
case 388:
case 1820:
case 2479:
case 3204:
case 1097:
case 1151:
case 1548:
case 3153:
case 765:
case 3353:
case 2227:
case 1438:
case 3277:
case 3581:
case 1632:
case 752:
case 1732:
case 2245:
case 2311:
case 2792:
case 29:
case 2104:
case 599:
case 4024:
case 1787:
case 2909:
case 3015:
case 2394:
case 2867:
case 4043:
case 2326:
case 2126:
case 1074:
case 2408:
case 1858:
case 101:
case 528:
case 2564:
case 897:
case 1007:
case 3294:
case 1740:
case 2486:
case 134:
case 3226:
case 1640:
case 547:
case 3376:
case 840:
case 3176:
case 4088:
case 1230:
case 2841:
case 2925:
case 1969:
case 1897:
case 1364:
case 1164:
case 243:
case 3405:
case 2534:
case 515:
case 1526:
case 2616:
case 2882:
case 3190:
case 3390:
case 3815:
case 1656:
case 369:
case 2444:
case 2947:
case 3993:
case 1705:
case 2931:
case 3373:
case 3195:
case 3810:
case 767:
case 3173:
case 3395:
case 1171:
case 777:
case 2459:
case 2262:
case 1368:
case 80:
case 844:
case 2538:
case 3719:
case 3033:
case 2483:
case 1031:
case 902:
case 110:
case 2357:
case 2157:
case 1235:
case 2742:
case 68:
case 2295:
case 1117:
case 1025:
case 3362:
case 4046:
case 2681:
case 3257:
case 4003:
case 1419:
case 2232:
case 2198:
case 1745:
case 1138:
case 1689:
case 1292:
case 3996:
case 2022:
case 2411:
case 1645:
case 195:
case 1753:
case 3751:
case 2404:
case 1061:
case 2568:
case 3427:
case 839:
case 2039:
case 1099:
case 819:
case 3298:
case 7:
case 3521:
case 2229:
case 695:
case 2179:
case 2379:
case 3072:
case 1727:
case 856:
case 4084:
case 2801:
case 2974:
case 291:
case 326:
case 10:
case 2386:
case 144:
case 1831:
case 3833:
case 3988:
case 537:
case 3476:
case 522:
case 830:
case 503:
case 1544:
case 236:
case 3955:
case 2494:
case 55:
case 1434:
case 2760:
case 3340:
case 2426:
case 2660:
case 3140:
case 374:
case 4028:
case 2869:
case 1941:
case 259:
case 1776:
case 153:
case 3906:
case 1861:
case 3490:
case 895:
case 2144:
case 2256:
case 4093:
case 323:
case 1918:
case 2205:
case 619:
case 506:
case 639:
case 1586:
case 1690:
case 2630:
case 3872:
case 1464:
case 1790:
case 3356:
case 3305:
case 545:
case 1967:
case 3105:
case 498:
case 1216:
case 2839:
case 79:
case 1674:
case 252:
case 3309:
case 3868:
case 3871:
case 3904:
case 171:
case 1110:
case 1873:
case 1895:
case 1310:
case 1774:
case 3911:
case 1436:
case 31:
case 380:
case 3407:
case 3250:
case 1503:
case 3501:
case 341:
case 2209:
case 1862:
case 1546:
case 2821:
case 22:
case 2184:
case 265:
case 3636:
case 661:
case 3736:
case 989:
case 2150:
case 4079:
case 2350:
case 2865:
case 1829:
case 648:
case 3983:
case 2016:
case 4057:
case 1201:
case 112:
case 3180:
case 785:
case 132:
case 3959:
case 1620:
case 3154:
case 368:
case 2510:
case 1466:
case 1584:
case 1832:
case 612:
case 2303:
case 4023:
case 3766:
case 3948:
case 2346:
case 1887:
case 3420:
case 3666:
case 2375:
case 3331:
case 2193:
case 968:
case 4044:
case 1133:
case 2393:
case 3147:
case 3522:
case 300:
case 978:
case 3347:
case 861:
case 1095:
case 1073:
case 3071:
case 3485:
case 2990:
case 1658:
case 2802:
case 2225:
case 1269:
case 1930:
case 45:
case 3275:
case 1840:
case 2718:
case 3539:
case 1528:
case 2618:
case 2021:
case 2247:
case 1685:
case 2572:
case 417:
case 1062:
case 1649:
case 3125:
case 3378:
case 2637:
case 3178:
case 598:
case 93:
case 3161:
case 2976:
case 2641:
case 2737:
case 1363:
case 3361:
case 2533:
case 2299:
case 3038:
case 2488:
case 2816:
case 1593:
case 1029:
case 832:
case 3497:
case 1372:
case 1172:
case 406:
case 2261:
case 746:
case 848:
case 2092:
case 3199:
case 4008:
case 1222:
case 2128:
case 3994:
case 2455:
case 1932:
case 3026:
case 2800:
case 27:
case 4051:
case 225:
case 3236:
case 1484:
case 1987:
case 2609:
case 579:
case 3848:
case 3938:
case 3650:
case 2136:
case 3750:
case 3684:
case 315:
case 2336:
case 1196:
case 335:
case 1566:
case 1274:
case 2076:
case 795:
case 238:
case 667:
case 3574:
case 351:
case 3401:
case 1962:
case 493:
case 2921:
case 2366:
case 3804:
case 1973:
case 328:
case 3703:
case 1030:
case 242:
case 3603:
case 78:
case 1601:
case 2090:
case 484:
case 3746:
case 730:
case 1614:
case 2524:
case 167:
case 2596:
case 3252:
case 3469:
case 947:
case 3597:
case 2506:
case 3167:
case 1905:
case 3793:
case 2218:
case 462:
case 3367:
case 3894:
case 951:
case 3775:
case 2731:
case 3675:
case 2747:
case 719:
case 4064:
case 858:
case 8:
case 2352:
case 3059:
case 2152:
case 2876:
case 1769:
case 2725:
case 588:
case 821:
case 2267:
case 1493:
case 3491:
case 1475:
case 1081:
case 3083:
case 1355:
case 2045:
case 2089:
case 3439:
case 1722:
case 3182:
case 3077:
case 4034:
case 3215:
case 3141:
case 2778:
case 2661:
case 1343:
case 2472:
case 3011:
case 2699:
case 1388:
case 2282:
case 3728:
case 1188:
case 3549:
case 2890:
case 404:
case 915:
case 744:
case 1830:
case 3004:
case 1297:
case 1067:
case 2119:
case 3657:
case 1423:
case 748:
case 2577:
case 2914:
case 408:
case 3589:
case 1551:
case 2874:
case 1148:
case 3553:
case 846:
case 1635:
case 240:
case 3896:
case 479:
case 3623:
case 596:
case 1621:
case 185:
case 3381:
case 469:
case 1183:
case 963:
case 3527:
case 805:
case 1159:
case 3142:
case 2468:
case 2049:
case 2662:
case 3342:
case 2471:
case 2085:
case 3435:
case 727:
case 2351:
case 924:
case 2548:
case 3006:
case 1037:
case 69:
case 2213:
case 1519:
case 1377:
case 2729:
case 843:
case 3500:
case 3779:
case 854:
case 966:
case 3251:
case 4036:
case 2687:
case 1104:
case 976:
case 3679:
case 19:
case 3313:
case 1245:
case 2732:
case 3113:
case 761:
case 1498:
case 1289:
case 2438:
case 3972:
case 1702:
case 1564:
case 201:
case 1408:
case 2074:
case 1126:
case 3786:
case 2260:
case 1326:
case 324:
case 1394:
case 2134:
case 1867:
case 572:
case 3708:
case 2849:
case 3402:
case 562:
case 3963:
case 2640:
case 3160:
case 3024:
case 3234:
case 1818:
case 366:
case 105:
case 214:
case 2007:
case 1882:
case 2526:
case 1616:
case 3855:
case 504:
case 2020:
case 1837:
case 2164:
case 3806:
case 249:
case 2364:
case 2969:
case 1925:
case 1290:
case 460:
case 3843:
case 2230:
case 3888:
case 3416:
case 1931:
case 3933:
case 2991:
case 3070:
case 154:
case 1947:
case 1444:
case 3130:
case 531:
case 1206:
case 696:
case 2585:
case 1672:
case 3237:
case 3241:
case 1243:
case 855:
case 3902:
case 1461:
case 3315:
case 3890:
case 2728:
case 3799:
case 1986:
case 421:
case 2628:
case 1255:
case 2137:
case 3472:
case 1397:
case 3678:
case 3761:
case 925:
case 1663:
case 3661:
case 3778:
case 3053:
case 2341:
case 2215:
case 96:
case 2141:
case 2077:
case 1499:
case 2382:
case 1288:
case 458:
case 872:
case 2439:
case 3916:
case 2083:
case 729:
case 2118:
case 1212:
case 942:
case 467:
case 1385:
case 3152:
case 1149:
case 84:
case 3876:
case 3352:
case 2059:
case 2826:
case 2693:
case 938:
case 1633:
case 3631:
case 3747:
case 918:
case 831:
case 2367:
case 2894:
case 3647:
case 2775:
case 1834:
case 193:
case 299:
case 1425:
case 3543:
case 2469:
case 2048:
case 2252:
case 1358:
case 672:
case 546:
case 290:
case 1957:
case 2507:
case 2968:
case 2746:
case 1480:
case 3827:
case 3166:
case 2703:
case 2804:
case 3935:
case 2971:
case 4081:
case 3845:
case 1270:
case 3921:
case 3889:
case 2877:
case 3680:
case 720:
case 3754:
case 896:
case 2574:
case 655:
case 3654:
case 2266:
case 3076:
case 4013:
case 543:
case 3336:
case 3570:
case 3965:
case 1307:
case 215:
case 611:
case 2883:
case 1174:
case 1710:
case 111:
case 1979:
case 1610:
case 3709:
case 1034:
case 1296:
case 2094:
case 554:
case 893:
case 3800:
case 37:
case 179:
case 2330:
case 1190:
case 1390:
case 3756:
case 485:
case 558:
case 3656:
case 169:
case 608:
case 3605:
case 3991:
case 2888:
case 3969:
case 2744:
case 2644:
case 997:
case 349:
case 3364:
case 108:
case 669:
case 981:
case 3594:
case 2855:
case 888:
case 3526:
case 679:
case 1294:
case 3740:
case 334:
case 276:
case 2024:
case 3640:
case 1376:
case 49:
case 2963:
case 794:
case 3849:
case 1852:
case 2708:
case 3134:
case 577:
case 3939:
case 783:
case 2786:
case 4037:
case 3074:
case 3858:
case 870:
case 4082:
case 3438:
case 3583:
case 3632:
case 869:
case 1277:
case 879:
case 2113:
case 2870:
case 3687:
case 914:
case 3559:
case 1127:
case 1542:
case 745:
case 1327:
case 808:
case 1189:
case 2055:
case 3629:
case 1345:
case 3213:
case 901:
case 1211:
case 1487:
case 188:
case 3820:
case 3097:
case 1204:
case 3151:
case 706:
case 3351:
case 2043:
case 3085:
case 1717:
case 1495:
case 3762:
case 1052:
case 1248:
case 1617:
case 2181:
case 2723:
case 2381:
case 1836:
case 340:
case 1513:
case 737:
case 717:
case 1671:
case 3242:
case 1259:
case 3417:
case 1462:
case 3901:
case 3874:
case 1903:
case 949:
case 2589:
case 3577:
case 1283:
case 1100:
case 3914:
case 3281:
case 3319:
case 160:
case 722:
case 2012:
case 2421:
case 3119:
case 629:
case 2305:
case 2356:
case 313:
case 2872:
case 3730:
case 571:
case 3630:
case 3958:
case 1316:
case 1116:
case 3822:
case 2664:
case 3985:
case 4031:
case 3949:
case 2502:
case 1952:
case 2764:
case 202:
case 784:
case 532:
case 820:
case 3308:
case 527:
case 274:
case 2340:
case 3660:
case 991:
case 1084:
case 316:
case 336:
case 1505:
case 548:
case 2208:
case 1302:
case 1915:
case 1893:
case 3891:
case 2734:
case 1875:
case 2833:
case 1794:
case 1694:
case 3386:
case 1704:
case 391:
case 936:
case 3801:
case 3379:
case 2187:
case 2072:
case 1604:
case 1846:
case 3229:
case 3613:
case 2298:
case 3039:
case 959:
case 453:
case 2332:
case 704:
case 282:
case 40:
case 2063:
case 2751:
case 1595:
case 3287:
case 2535:
case 1413:
case 1936:
case 1777:
case 4009:
case 3411:
case 1365:
case 2996:
case 3907:
case 1165:
case 2129:
case 2924:
case 1783:
case 3123:
case 3781:
case 120:
case 2257:
case 3323:
case 1321:
case 439:
case 419:
case 1659:
case 3069:
case 3642:
case 1268:
case 2162:
case 3295:
case 3920:
case 2970:
case 2619:
case 2565:
case 1529:
case 3357:
case 2033:
case 1481:
case 3538:
case 2719:
case 4054:
case 3091:
case 1093:
case 3262:
case 1442:
case 2173:
case 1135:
case 1748:
case 2195:
case 2373:
case 1335:
case 1934:
case 1339:
case 2926:
case 1688:
case 3092:
case 3261:
case 965:
case 1441:
case 2569:
case 3443:
case 92:
case 837:
case 1437:
case 694:
case 183:
case 3406:
case 817:
case 289:
case 2497:
case 3278:
case 1547:
case 1122:
case 1322:
case 461:
case 1655:
case 3533:
case 3976:
case 3641:
case 85:
case 2161:
case 1706:
case 2178:
case 1606:
case 2378:
case 1272:
case 3637:
case 3741:
case 1743:
case 2458:
case 806:
case 2125:
case 1808:
case 2752:
case 1964:
case 1023:
case 3247:
case 186:
case 4056:
case 2539:
case 448:
case 2275:
case 1233:
case 2449:
case 3802:
case 3225:
case 3035:
case 779:
case 1886:
case 412:
case 3667:
case 1612:
case 2147:
case 432:
case 2522:
case 1391:
case 1712:
case 2131:
case 769:
case 3193:
case 209:
case 1879:
case 3346:
case 2666:
case 3280:
case 3103:
case 122:
case 2766:
case 3303:
case 1301:
case 883:
case 1114:
case 117:
case 1314:
case 1919:
case 50:
case 3510:
case 268:
case 553:
case 2354:
case 1044:
case 1509:
case 894:
case 637:
case 1898:
case 622:
case 3865:
case 603:
case 15:
case 257:
case 1796:
case 4087:
case 2514:
case 106:
case 365:
case 3821:
case 32:
case 2474:
case 1951:
case 241:
case 2817:
case 2250:
case 3424:
case 2407:
case 280:
case 1086:
case 2911:
case 519:
case 606:
case 539:
case 4029:
case 352:
case 2109:
case 3739:
case 2518:
case 921:
case 1422:
case 2986:
case 3013:
case 3388:
case 3188:
case 597:
case 828:
case 2461:
case 2772:
case 890:
case 3297:
case 2206:
case 1004:
case 296:
case 2567:
case 851:
case 3940:
case 9:
case 958:
case 3722:
case 1077:
case 1141:
case 1341:
case 46:
case 2051:
case 3106:
case 2197:
case 3306:
case 1137:
case 2864:
case 1059:
case 3515:
case 815:
case 3042:
case 977:
case 835:
case 2385:
case 3769:
case 2447:
case 4090:
case 1318:
case 699:
case 1491:
case 3081:
case 1083:
case 3249:
case 2425:
case 2158:
case 2541:
case 3285:
case 2537:
case 293:
case 1793:
case 3791:
case 2834:
case 2733:
case 1675:
case 3691:
case 1693:
case 418:
case 2454:
case 3701:
case 128:
case 3220:
case 1603:
case 501:
case 647:
case 1968:
case 651:
case 1507:
case 2957:
case 377:
case 3714:
case 3370:
case 3536:
case 1266:
case 2320:
case 3446:
case 1574:
case 3962:
case 262:
case 151:
case 147:
case 534:
case 2923:
case 514:
case 1883:
case 3881:
case 1938:
case 3324:
case 3060:
case 2998:
case 2307:
case 1684:
case 115:
case 4027:
case 2107:
case 204:
case 782:
case 3566:
case 3842:
case 1859:
case 2224:
case 1026:
case 899:
case 1094:
case 2819:
case 1236:
case 358:
case 4089:
case 2979:
case 615:
case 2374:
case 1848:
case 4045:
case 4085:
case 3931:
case 2560:
case 2993:
case 57:
case 4049:
case 56:
case 1070:
case 525:
case 3947:
case 163:
case 2066:
case 1264:
case 700:
case 2815:
case 440:
case 1576:
case 2190:
case 3534:
case 481:
case 2405:
case 208:
case 3837:
case 1644:
case 1744:
case 3925:
case 1843:
case 538:
case 2852:
case 99:
case 1590:
case 2376:
case 305:
case 1096:
case 2294:
case 1972:
case 3702:
case 666:
case 3602:
case 676:
case 542:
case 3276:
case 1786:
case 3999:
case 2440:
case 2928:
case 1812:
case 4007:
case 1779:
case 434:
case 2542:
case 780:
case 3311:
case 3792:
case 1313:
case 1465:
case 2429:
case 1870:
case 1113:
case 3245:
case 3692:
case 1043:
case 3227:
case 946:
case 2204:
case 1006:
case 288:
case 2487:
case 3037:
case 1798:
case 2211:
case 2984:
case 2345:
case 1055:
case 3519:
case 2738:
case 3765:
case 3377:
case 2389:
case 2950:
case 1698:
case 2432:
case 3082:
case 3177:
case 1896:
case 1623:
case 1219:
case 3457:
case 385:
case 3383:
case 1181:
case 3200:
case 1723:
case 1527:
case 3159:
case 2617:
case 3980:
case 1342:
case 2248:
case 2052:
case 2495:
case 3954:
case 2717:
case 1435:
case 1657:
case 1421:
case 1545:
case 3423:
case 2283:
case 449:
case 1757:
case 4020:
case 709:
case 2903:
case 2771:
case 2768:
case 2671:
case 3508:
case 2003:
case 1872:
case 2046:
case 319:
case 4069:
case 1305:
case 2540:
case 799:
case 602:
case 1764:
case 910:
case 2430:
case 98:
case 3080:
case 1502:
case 930:
case 1863:
case 3878:
case 4091:
case 1664:
case 3918:
case 565:
case 882:
case 575:
case 2316:
case 2505:
case 1955:
case 1286:
case 3434:
case 2084:
case 2050:
case 3202:
case 3676:
case 3937:
case 4039:
case 1906:
case 353:
case 126:
case 2726:
case 2694:
case 1988:
case 3831:
case 2875:
case 1734:
case 2626:
case 1516:
case 674:
case 1476:
case 3009:
case 4022:
case 2302:
case 2102:
case 3544:
case 664:
case 2238:
case 1332:
case 1489:
case 1298:
case 2711:
case 1132:
case 459:
case 953:
case 3265:
case 1387:
case 2846:
case 1072:
case 1187:
case 416:
case 2803:
case 3627:
case 1453:
case 436:
case 2704:
case 2677:
case 3745:
case 3338:
case 3138:
case 3292:
case 802:
case 2165:
case 1996:
case 395:
case 2365:
case 2777:
case 3854:
case 2595:
case 3078:
case 3753:
case 1651:
case 3061:
case 3653:
case 944:
case 735:
case 3880:
case 182:
case 2271:
case 3235:
case 4014:
case 298:
case 407:
case 874:
case 864:
case 1362:
case 2659:
case 3117:
case 939:
case 1400:
case 413:
case 2850:
case 919:
case 4001:
case 3419:
case 2884:
case 2321:
case 2121:
case 1373:
case 2748:
case 1810:
case 1173:
case 2217:
case 3168:
case 2648:
case 790:
case 3368:
case 1719:
case 2481:
case 3031:
case 728:
case 3598:
case 1223:
case 3700:
case 3047:
case 2529:
case 1565:
case 1497:
case 3372:
case 283:
case 1715:
case 2437:
case 465:
case 724:
case 2441:
case 1569:
case 2263:
case 42:
case 2139:
case 3032:
case 809:
case 3222:
case 3805:
case 2788:
case 1994:
case 1378:
case 1178:
case 776:
case 3163:
case 2706:
case 1161:
case 3797:
case 1361:
case 3415:
case 2531:
case 3960:
case 1038:
case 878:
case 4002:
case 294:
case 1228:
case 961:
case 2547:
case 948:
case 2599:
case 2233:
case 3528:
case 2467:
case 841:
case 286:
case 550:
case 600:
case 3749:
case 3062:
case 3649:
case 2369:
case 1458:
case 1125:
case 3785:
case 1331:
case 2391:
case 1131:
case 587:
case 2612:
case 773:
case 1522:
case 932:
case 1347:
case 3095:
case 2578:
case 3758:
case 927:
case 1485:
case 4016:
case 3269:
case 1068:
case 83:
case 591:
case 2561:
case 3452:
case 668:
case 3584:
case 2670:
case 889:
case 4021:
case 1948:
case 2101:
case 3887:
case 1420:
case 2879:
case 536:
case 25:
case 792:
case 3829:
case 1838:
case 4035:
case 3214:
case 3981:
case 2898:
case 178:
case 312:
case 1203:
case 332:
case 1959:
case 1354:
case 3466:
case 1154:
case 3620:
case 1817:
case 141:
case 3503:
case 1501:
case 2951:
case 2008:
case 1474:
case 3546:
case 2210:
case 2823:
case 3607:
case 1636:
case 206:
case 1514:
case 1977:
case 1736:
case 3707:
case 3040:
case 1109:
case 3674:
case 1309:
case 513:
case 2554:
case 1904:
case 533:
case 3310:
case 3913:
case 3436:
case 13:
case 180:
case 641:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757862002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,];
var gg_b = "1757862002/";

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
