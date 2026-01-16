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
case 1894:
case 1840:
case 662:
case 3389:
case 1764:
case 1252:
case 2339:
case 3416:
case 3204:
case 3041:
case 2199:
case 3835:
case 3098:
case 818:
case 616:
case 664:
case 830:
case 174:
case 3958:
case 1931:
case 3167:
case 1849:
case 476:
case 3380:
case 1758:
case 2781:
case 3452:
case 1236:
case 262:
case 2155:
case 1087:
case 489:
case 2144:
case 2504:
case 2302:
case 3711:
case 2177:
case 3674:
case 2310:
case 2927:
case 2190:
case 997:
case 914:
case 1072:
case 2947:
case 3693:
case 2249:
case 103:
case 2124:
case 1515:
case 3540:
case 2415:
case 3100:
case 3112:
case 966:
case 2182:
case 3132:
case 2816:
case 1535:
case 264:
case 3964:
case 101:
case 2435:
case 392:
case 46:
case 3185:
case 199:
case 160:
case 2482:
case 347:
case 1738:
case 883:
case 670:
case 2779:
case 1697:
case 246:
case 1718:
case 1209:
case 944:
case 1907:
case 3412:
case 2395:
case 3400:
case 1623:
case 32:
case 1104:
case 2856:
case 2013:
case 4068:
case 1643:
case 2444:
case 1342:
case 687:
case 3305:
case 3467:
case 504:
case 3083:
case 3152:
case 3760:
case 2359:
case 3890:
case 765:
case 2723:
case 3409:
case 2618:
case 2770:
case 1048:
case 1200:
case 1212:
case 1028:
case 2499:
case 14:
case 3116:
case 848:
case 2743:
case 700:
case 454:
case 4054:
case 3918:
case 386:
case 1969:
case 2800:
case 3824:
case 1980:
case 134:
case 683:
case 1808:
case 1052:
case 315:
case 2020:
case 909:
case 535:
case 1746:
case 3298:
case 2175:
case 85:
case 1726:
case 248:
case 3221:
case 1602:
case 1778:
case 887:
case 158:
case 1610:
case 1992:
case 2719:
case 995:
case 3553:
case 3654:
case 2157:
case 1630:
case 1085:
case 784:
case 3165:
case 2462:
case 1562:
case 2166:
case 283:
case 1287:
case 388:
case 577:
case 2646:
case 1441:
case 1498:
case 3176:
case 3926:
case 1272:
case 2049:
case 3191:
case 3311:
case 2702:
case 2678:
case 2710:
case 3946:
case 2626:
case 580:
case 2521:
case 2887:
case 3780:
case 2730:
case 1639:
case 4074:
case 1056:
case 1813:
case 1265:
case 862:
case 1742:
case 1833:
case 1121:
case 3448:
case 759:
case 1971:
case 618:
case 2213:
case 3428:
case 816:
case 767:
case 4027:
case 1659:
case 1338:
case 3351:
case 3875:
case 1784:
case 2750:
case 3369:
case 2233:
case 524:
case 3283:
case 1557:
case 685:
case 339:
case 3801:
case 968:
case 2934:
case 3465:
case 3984:
case 2343:
case 533:
case 1575:
case 3866:
case 3922:
case 1012:
case 1248:
case 313:
case 218:
case 991:
case 2397:
case 3513:
case 1276:
case 720:
case 1905:
case 2891:
case 230:
case 2848:
case 3533:
case 3634:
case 1650:
case 3187:
case 2583:
case 2761:
case 993:
case 478:
case 3592:
case 2741:
case 3340:
case 1074:
case 4056:
case 1889:
case 2617:
case 2972:
case 1047:
case 3425:
case 2122:
case 3394:
case 4009:
case 2637:
case 1150:
case 2184:
case 291:
case 1335:
case 3878:
case 2289:
case 2987:
case 590:
case 918:
case 3846:
case 829:
case 3580:
case 2502:
case 1027:
case 1410:
case 2510:
case 3445:
case 3373:
case 2721:
case 3917:
case 1093:
case 3708:
case 3219:
case 2304:
case 526:
case 693:
case 1908:
case 866:
case 407:
case 717:
case 1546:
case 1880:
case 1641:
case 2845:
case 3081:
case 691:
case 814:
case 4000:
case 1159:
case 850:
case 812:
case 3589:
case 3468:
case 87:
case 2426:
case 1526:
case 668:
case 3329:
case 1245:
case 1621:
case 4067:
case 794:
case 3202:
case 1419:
case 2478:
case 985:
case 1578:
case 3648:
case 2976:
case 2205:
case 1399:
case 2928:
case 23:
case 1119:
case 3168:
case 72:
case 1757:
case 3822:
case 2814:
case 2051:
case 1088:
case 1234:
case 2561:
case 458:
case 1461:
case 2559:
case 981:
case 844:
case 2783:
case 2666:
case 983:
case 3295:
case 4085:
case 2506:
case 2991:
case 1406:
case 432:
case 2146:
case 1390:
case 2442:
case 3505:
case 3023:
case 1377:
case 295:
case 63:
case 1344:
case 2675:
case 779:
case 4036:
case 1355:
case 1933:
case 300:
case 2965:
case 1766:
case 1896:
case 423:
case 3259:
case 209:
case 1495:
case 421:
case 2595:
case 2007:
case 3975:
case 3043:
case 3206:
case 365:
case 3414:
case 508:
case 3720:
case 460:
case 895:
case 3616:
case 384:
case 3511:
case 1247:
case 4065:
case 1949:
case 1558:
case 3531:
case 2458:
case 2763:
case 3636:
case 95:
case 743:
case 2893:
case 2936:
case 1068:
case 405:
case 715:
case 3039:
case 3188:
case 382:
case 1227:
case 1929:
case 3864:
case 3019:
case 2341:
case 3740:
case 2916:
case 3474:
case 2092:
case 138:
case 3915:
case 506:
case 2211:
case 1994:
case 2403:
case 83:
case 3729:
case 3652:
case 2231:
case 1362:
case 3281:
case 4091:
case 1564:
case 1663:
case 2464:
case 3353:
case 1337:
case 44:
case 946:
case 2080:
case 154:
case 2635:
case 244:
case 2615:
case 3002:
case 1831:
case 1123:
case 555:
case 1045:
case 3858:
case 3010:
case 1973:
case 1317:
case 788:
case 1920:
case 3600:
case 2005:
case 2523:
case 3127:
case 1423:
case 3944:
case 266:
case 3313:
case 1470:
case 70:
case 3333:
case 3955:
case 3560:
case 2967:
case 2251:
case 916:
case 250:
case 551:
case 2655:
case 3050:
case 297:
case 3982:
case 2164:
case 962:
case 2677:
case 3174:
case 2103:
case 3838:
case 1869:
case 1443:
case 1375:
case 1518:
case 2418:
case 893:
case 2579:
case 3609:
case 3270:
case 3297:
case 189:
case 4087:
case 1301:
case 1782:
case 2260:
case 614:
case 891:
case 320:
case 650:
case 1366:
case 3569:
case 2438:
case 2158:
case 697:
case 1181:
case 3061:
case 2956:
case 1744:
case 739:
case 401:
case 711:
case 1860:
case 2699:
case 528:
case 16:
case 2909:
case 1712:
case 1700:
case 2270:
case 2609:
case 1328:
case 667:
case 4017:
case 1588:
case 2569:
case 3438:
case 177:
case 1451:
case 2551:
case 1843:
case 2656:
case 220:
case 3158:
case 1823:
case 1767:
case 659:
case 3956:
case 1870:
case 861:
case 718:
case 1897:
case 329:
case 2061:
case 3071:
case 1391:
case 696:
case 3909:
case 1111:
case 2243:
case 2006:
case 1218:
case 2990:
case 1042:
case 2944:
case 366:
case 2560:
case 267:
case 350:
case 2632:
case 3682:
case 620:
case 314:
case 3251:
case 397:
case 1879:
case 1365:
case 1084:
case 2050:
case 312:
case 2667:
case 3164:
case 149:
case 2982:
case 3912:
case 3677:
case 2095:
case 3888:
case 558:
case 2838:
case 2147:
case 1022:
case 1716:
case 1673:
case 133:
case 1107:
case 1372:
case 1620:
case 3211:
case 2281:
case 1258:
case 426:
case 507:
case 2353:
case 3464:
case 1736:
case 92:
case 4001:
case 1963:
case 3635:
case 3080:
case 4066:
case 2749:
case 1881:
case 2427:
case 2010:
case 947:
case 3615:
case 2002:
case 1694:
case 1593:
case 2720:
case 3321:
case 2308:
case 979:
case 1629:
case 3704:
case 1411:
case 2511:
case 1203:
case 986:
case 4075:
case 3458:
case 1431:
case 1264:
case 2039:
case 3936:
case 1785:
case 2986:
case 2803:
case 124:
case 3847:
case 1151:
case 3398:
case 490:
case 2794:
case 1078:
case 865:
case 1649:
case 2019:
case 2023:
case 2145:
case 2505:
case 3442:
case 3675:
case 2070:
case 1748:
case 395:
case 1861:
case 3060:
case 943:
case 200:
case 1367:
case 3657:
case 1180:
case 1806:
case 137:
case 3550:
case 501:
case 1534:
case 1332:
case 428:
case 2259:
case 2957:
case 3271:
case 1192:
case 3595:
case 1312:
case 503:
case 1613:
case 2125:
case 9:
case 3126:
case 1242:
case 3205:
case 2079:
case 2884:
case 3976:
case 2648:
case 2691:
case 2596:
case 1895:
case 1189:
case 3814:
case 1038:
case 2822:
case 2250:
case 1284:
case 2842:
case 3666:
case 3783:
case 574:
case 3561:
case 2295:
case 3948:
case 2571:
case 3601:
case 1222:
case 1921:
case 3854:
case 3011:
case 2349:
case 3446:
case 1810:
case 2081:
case 406:
case 716:
case 1802:
case 3845:
case 1058:
case 90:
case 527:
case 3539:
case 1336:
case 455:
case 1568:
case 2753:
case 171:
case 4090:
case 3280:
case 1998:
case 2329:
case 1772:
case 3426:
case 1316:
case 762:
case 556:
case 393:
case 2340:
case 2394:
case 1003:
case 3798:
case 1246:
case 2114:
case 2687:
case 3184:
case 3637:
case 2826:
case 560:
case 1385:
case 945:
case 1819:
case 820:
case 2239:
case 3289:
case 2937:
case 104:
case 2580:
case 1653:
case 261:
case 2846:
case 3510:
case 2373:
case 2445:
case 368:
case 505:
case 3304:
case 939:
case 2708:
case 2917:
case 911:
case 3457:
case 1950:
case 2984:
case 2465:
case 3876:
case 963:
case 2922:
case 2866:
case 538:
case 961:
case 3475:
case 3343:
case 2307:
case 4058:
case 106:
case 729:
case 2771:
case 1044:
case 3117:
case 60:
case 2513:
case 2614:
case 3397:
case 1077:
case 3706:
case 1090:
case 3891:
case 1266:
case 3759:
case 3761:
case 473:
case 1433:
case 3583:
case 2634:
case 1055:
case 554:
case 1959:
case 639:
case 1257:
case 77:
case 2705:
case 1591:
case 1906:
case 2491:
case 797:
case 1275:
case 1696:
case 4064:
case 1548:
case 645:
case 3401:
case 2428:
case 3213:
case 1528:
case 1576:
case 3379:
case 1734:
case 0:
case 3233:
case 3872:
case 3166:
case 6:
case 1086:
case 288:
case 1237:
case 3968:
case 847:
case 1919:
case 2128:
case 1217:
case 3101:
case 2926:
case 1725:
case 3598:
case 744:
case 2946:
case 3049:
case 437:
case 82:
case 2837:
case 3626:
case 643:
case 56:
case 1408:
case 2817:
case 2668:
case 3381:
case 3730:
case 2780:
case 2331:
case 1754:
case 965:
case 1930:
case 2063:
case 4018:
case 1587:
case 2487:
case 1133:
case 1821:
case 688:
case 540:
case 3020:
case 3417:
case 2625:
case 2241:
case 2298:
case 3945:
case 4038:
case 3073:
case 1692:
case 3094:
case 2472:
case 900:
case 3925:
case 1572:
case 1374:
case 243:
case 3040:
case 1015:
case 348:
case 153:
case 2221:
case 1453:
case 2654:
case 151:
case 1680:
case 3157:
case 1841:
case 1035:
case 1768:
case 2789:
case 3462:
case 1898:
case 2165:
case 1669:
case 3638:
case 1651:
case 8:
case 2760:
case 3361:
case 2877:
case 3867:
case 2409:
case 3306:
case 1509:
case 3723:
case 709:
case 3618:
case 3832:
case 2882:
case 62:
case 1244:
case 2707:
case 1129:
case 2918:
case 1290:
case 843:
case 387:
case 3743:
case 1066:
case 984:
case 3988:
case 286:
case 2136:
case 279:
case 3800:
case 3482:
case 2432:
case 18:
case 1057:
case 1660:
case 4046:
case 2751:
case 1075:
case 346:
case 422:
case 1943:
case 1140:
case 3424:
case 2412:
case 1997:
case 1120:
case 3856:
case 1607:
case 1970:
case 1173:
case 3477:
case 3490:
case 2305:
case 424:
case 2467:
case 169:
case 1567:
case 190:
case 3809:
case 679:
case 2083:
case 3033:
case 3781:
case 2731:
case 2167:
case 3664:
case 3563:
case 362:
case 1552:
case 2452:
case 49:
case 1286:
case 3603:
case 3504:
case 959:
case 1420:
case 2647:
case 3229:
case 3190:
case 3927:
case 3177:
case 2674:
case 2573:
case 2711:
case 3302:
case 2594:
case 2693:
case 80:
case 316:
case 3947:
case 1494:
case 2903:
case 1325:
case 3836:
case 2112:
case 3974:
case 536:
case 2886:
case 967:
case 108:
case 2540:
case 2627:
case 1440:
case 3816:
case 480:
case 292:
case 4042:
case 694:
case 811:
case 3339:
case 3486:
case 1536:
case 435:
case 2436:
case 3658:
case 1631:
case 1774:
case 1611:
case 2041:
case 1516:
case 2098:
case 1429:
case 1727:
case 4084:
case 2549:
case 3294:
case 1449:
case 1863:
case 449:
case 2021:
case 3008:
case 793:
case 1981:
case 2958:
case 4022:
case 692:
case 1177:
case 1302:
case 3345:
case 1504:
case 771:
case 500:
case 2236:
case 2087:
case 162:
case 2849:
case 1330:
case 2758:
case 674:
case 3062:
case 1816:
case 3585:
case 1053:
case 1124:
case 2515:
case 1836:
case 3325:
case 3494:
case 2072:
case 940:
case 116:
case 2326:
case 3429:
case 1273:
case 3747:
case 1319:
case 3516:
case 1220:
case 1199:
case 3611:
case 2681:
case 2840:
case 807:
case 1658:
case 1486:
case 3536:
case 2252:
case 3368:
case 4005:
case 2894:
case 96:
case 2873:
case 274:
case 976:
case 2285:
case 2820:
case 47:
case 3235:
case 989:
case 601:
case 1240:
case 2911:
case 3449:
case 3727:
case 1770:
case 2048:
case 1797:
case 2212:
case 2200:
case 1723:
case 1306:
case 656:
case 442:
case 737:
case 3149:
case 1867:
case 326:
case 170:
case 227:
case 699:
case 2232:
case 1359:
case 3282:
case 1361:
case 3669:
case 1638:
case 1800:
case 3255:
case 2969:
case 2267:
case 3066:
case 187:
case 858:
case 3979:
case 1743:
case 444:
case 4080:
case 2076:
case 3290:
case 1499:
case 3244:
case 2599:
case 605:
case 3512:
case 1395:
case 3500:
case 3140:
case 1115:
case 2524:
case 1779:
case 2907:
case 3075:
case 954:
case 2670:
case 2209:
case 1350:
case 3660:
case 260:
case 2256:
case 38:
case 775:
case 938:
case 1455:
case 2555:
case 1033:
case 821:
case 1809:
case 369:
case 3923:
case 3173:
case 1477:
case 2104:
case 3607:
case 3970:
case 1444:
case 3997:
case 205:
case 4089:
case 1029:
case 1598:
case 3725:
case 4060:
case 3217:
case 181:
case 3939:
case 2989:
case 1968:
case 899:
case 1872:
case 3262:
case 1381:
case 1730:
case 2358:
case 3754:
case 3689:
case 221:
case 3408:
case 719:
case 2421:
case 1521:
case 1049:
case 2272:
case 1678:
case 805:
case 3327:
case 3692:
case 4069:
case 2746:
case 3902:
case 1417:
case 3113:
case 827:
case 1437:
case 2183:
case 3133:
case 3930:
case 1954:
case 234:
case 559:
case 2562:
case 1462:
case 2364:
case 2630:
case 2085:
case 3035:
case 3841:
case 1157:
case 1040:
case 2610:
case 3374:
case 148:
case 353:
case 2602:
case 3015:
case 1719:
case 623:
case 2992:
case 1094:
case 3572:
case 1925:
case 722:
case 3605:
case 118:
case 4031:
case 1914:
case 1162:
case 207:
case 3950:
case 1934:
case 1457:
case 3153:
case 1828:
case 3082:
case 3433:
case 1583:
case 1684:
case 2483:
case 1759:
case 1761:
case 79:
case 2695:
case 777:
case 3090:
case 1706:
case 1323:
case 3201:
case 625:
case 3413:
case 2833:
case 2121:
case 3275:
case 607:
case 3959:
case 978:
case 493:
case 2813:
case 735:
case 2659:
case 2566:
case 2784:
case 1750:
case 3734:
case 3714:
case 2318:
case 2722:
case 1379:
case 1865:
case 3576:
case 582:
case 3099:
case 1213:
case 2501:
case 1795:
case 1401:
case 925:
case 2161:
case 840:
case 3810:
case 3058:
case 2546:
case 1011:
case 2225:
case 2880:
case 2908:
case 1292:
case 1519:
case 3316:
case 2419:
case 1478:
case 1426:
case 3998:
case 2621:
case 2762:
case 2254:
case 1280:
case 579:
case 2892:
case 3336:
case 3568:
case 586:
case 2439:
case 3819:
case 191:
case 2953:
case 3385:
case 547:
case 1184:
case 302:
case 1637:
case 1617:
case 889:
case 3246:
case 2074:
case 1741:
case 2195:
case 3839:
case 485:
case 2889:
case 876:
case 3278:
case 1721:
case 1304:
case 678:
case 1510:
case 907:
case 1502:
case 2027:
case 3545:
case 2410:
case 1142:
case 1363:
case 2430:
case 3653:
case 3554:
case 304:
case 1289:
case 2268:
case 1662:
case 3367:
case 958:
case 2871:
case 2355:
case 1060:
case 2933:
case 481:
case 3859:
case 195:
case 2913:
case 1675:
case 1296:
case 3748:
case 3791:
case 1442:
case 2102:
case 236:
case 934:
case 3514:
case 3613:
case 1595:
case 3300:
case 3192:
case 3728:
case 2896:
case 109:
case 2382:
case 2683:
case 1550:
case 1965:
case 1484:
case 3534:
case 3633:
case 726:
case 4073:
case 2088:
case 1069:
case 3038:
case 1814:
case 1051:
case 3895:
case 4020:
case 852:
case 2757:
case 3496:
case 1178:
case 2399:
case 921:
case 1928:
case 13:
case 3850:
case 769:
case 2775:
case 838:
case 1834:
case 1976:
case 1205:
case 1126:
case 3242:
case 1991:
case 3309:
case 2214:
case 1506:
case 3222:
case 757:
case 1948:
case 3356:
case 810:
case 1559:
case 4040:
case 2459:
case 448:
case 1561:
case 1783:
case 2805:
case 4094:
case 3284:
case 1464:
case 1985:
case 2663:
case 331:
case 252:
case 511:
case 3258:
case 3620:
case 2994:
case 513:
case 2143:
case 1403:
case 238:
case 333:
case 3716:
case 2940:
case 999:
case 3593:
case 3694:
case 3640:
case 3527:
case 2831:
case 2123:
case 2045:
case 2973:
case 210:
case 956:
case 144:
case 2811:
case 254:
case 1635:
case 3160:
case 45:
case 2337:
case 94:
case 3431:
case 1581:
case 322:
case 1827:
case 1686:
case 1763:
case 652:
case 3203:
case 2949:
case 2293:
case 3078:
case 1341:
case 3026:
case 2179:
case 3169:
case 610:
case 324:
case 1138:
case 1936:
case 1874:
case 3785:
case 2735:
case 2068:
case 2807:
case 3451:
case 377:
case 2538:
case 3469:
case 3843:
case 640:
case 3732:
case 1260:
case 289:
case 3700:
case 974:
case 2518:
case 2479:
case 2777:
case 1699:
case 3391:
case 26:
case 1909:
case 1071:
case 3348:
case 2860:
case 129:
case 91:
case 1956:
case 2755:
case 706:
case 1158:
case 1269:
case 2288:
case 1251:
case 240:
case 903:
case 5:
case 3756:
case 1570:
case 3042:
case 2423:
case 676:
case 3218:
case 515:
case 1523:
case 1624:
case 1543:
case 1644:
case 2851:
case 66:
case 1690:
case 1900:
case 2799:
case 4008:
case 1932:
case 541:
case 2034:
case 1655:
case 340:
case 1632:
case 4041:
case 2460:
case 1955:
case 1560:
case 1333:
case 908:
case 235:
case 3470:
case 1944:
case 1193:
case 2709:
case 2218:
case 1977:
case 2042:
case 873:
case 3014:
case 680:
case 3869:
case 3799:
case 4021:
case 159:
case 3357:
case 871:
case 1818:
case 1050:
case 2843:
case 3538:
case 2588:
case 1569:
case 2451:
case 3366:
case 389:
case 1270:
case 376:
case 3479:
case 581:
case 494:
case 1223:
case 707:
case 417:
case 280:
case 492:
case 1006:
case 2348:
case 804:
case 3755:
case 1061:
case 2897:
case 3181:
case 2767:
case 631:
case 2752:
case 619:
case 1636:
case 1531:
case 184:
case 1511:
case 2411:
case 2203:
case 2046:
case 1720:
case 1308:
case 2629:
case 3715:
case 1740:
case 1864:
case 3179:
case 734:
case 1794:
case 2169:
case 1188:
case 3068:
case 42:
case 1353:
case 723:
case 3786:
case 3663:
case 1935:
case 219:
case 2258:
case 3362:
case 1652:
case 2372:
case 969:
case 3503:
case 1729:
case 3604:
case 2107:
case 2547:
case 3025:
case 518:
case 3994:
case 1447:
case 2620:
case 990:
case 1915:
case 721:
case 3940:
case 338:
case 98:
case 3197:
case 3317:
case 3170:
case 2904:
case 1749:
case 3831:
case 2881:
case 957:
case 3054:
case 1030:
case 2387:
case 819:
case 1966:
case 928:
case 415:
case 705:
case 3139:
case 3399:
case 2496:
case 1901:
case 833:
case 2850:
case 4:
case 2222:
case 2309:
case 3214:
case 3406:
case 1676:
case 799:
case 441:
case 1295:
case 2471:
case 1571:
case 760:
case 443:
case 3461:
case 756:
case 1842:
case 3805:
case 2367:
case 1154:
case 2180:
case 1665:
case 3933:
case 2983:
case 953:
case 3871:
case 1070:
case 2748:
case 2861:
case 1097:
case 2859:
case 1145:
case 3377:
case 2405:
case 2514:
case 1125:
case 1043:
case 336:
case 727:
case 3324:
case 3495:
case 3701:
case 2312:
case 1261:
case 2332:
case 3896:
case 2633:
case 3766:
case 3584:
case 237:
case 955:
case 3335:
case 2385:
case 1878:
case 2064:
case 202:
case 1687:
case 3150:
case 1394:
case 2246:
case 3047:
case 2525:
case 1425:
case 3889:
case 2839:
case 3074:
case 1917:
case 1672:
case 673:
case 1708:
case 1320:
case 3027:
case 1373:
case 1445:
case 204:
case 1580:
case 2653:
case 2554:
case 3430:
case 1454:
case 40:
case 3268:
case 2352:
case 413:
case 570:
case 3159:
case 2787:
case 2810:
case 1081:
case 3641:
case 835:
case 2171:
case 2921:
case 701:
case 3698:
case 587:
case 378:
case 3419:
case 2941:
case 3245:
case 2998:
case 2772:
case 1329:
case 1230:
case 3386:
case 3439:
case 2489:
case 445:
case 1753:
case 271:
case 3971:
case 2906:
case 1491:
case 2591:
case 606:
case 2696:
case 3265:
case 2959:
case 1351:
case 2388:
case 3566:
case 3661:
case 461:
case 3198:
case 2714:
case 808:
case 10:
case 325:
case 2528:
case 1428:
case 113:
case 1796:
case 2024:
case 2995:
case 3000:
case 3012:
case 1866:
case 4081:
case 2565:
case 2950:
case 1984:
case 1465:
case 2082:
case 3557:
case 111:
case 542:
case 1360:
case 3483:
case 544:
case 3650:
case 1187:
case 789:
case 3067:
case 2266:
case 902:
case 3905:
case 1942:
case 2090:
case 3276:
case 3695:
case 3228:
case 2413:
case 145:
case 2201:
case 566:
case 2692:
case 1004:
case 115:
case 1625:
case 3808:
case 334:
case 3980:
case 3562:
case 1165:
case 1553:
case 251:
case 2680:
case 2841:
case 512:
case 3630:
case 2453:
case 3364:
case 597:
case 628:
case 253:
case 1221:
case 1645:
case 3726:
case 3303:
case 2347:
case 2725:
case 1862:
case 400:
case 754:
case 1128:
case 1792:
case 2217:
case 3853:
case 3036:
case 2237:
case 975:
case 857:
case 2939:
case 3287:
case 2689:
case 529:
case 3639:
case 1780:
case 2754:
case 1331:
case 3358:
case 2262:
case 651:
case 1817:
case 1837:
case 1148:
case 228:
case 1311:
case 3619:
case 1191:
case 2500:
case 2512:
case 3209:
case 3718:
case 3907:
case 2075:
case 3322:
case 484:
case 3065:
case 3738:
case 147:
case 2334:
case 3384:
case 1769:
case 3582:
case 2532:
case 360:
case 1899:
case 1185:
case 3960:
case 482:
case 1467:
case 2173:
case 2923:
case 2299:
case 3544:
case 3643:
case 4039:
case 12:
case 2607:
case 2224:
case 1371:
case 226:
case 3091:
case 924:
case 736:
case 1877:
case 657:
case 2651:
case 2669:
case 1688:
case 1760:
case 3232:
case 1824:
case 2255:
case 1136:
case 179:
case 851:
case 669:
case 186:
case 4010:
case 690:
case 1707:
case 2979:
case 1882:
case 1396:
case 3599:
case 2747:
case 3326:
case 1041:
case 3378:
case 2774:
case 31:
case 2516:
case 1204:
case 1389:
case 2368:
case 2536:
case 3252:
case 1815:
case 2631:
case 3840:
case 3681:
case 3894:
case 372:
case 496:
case 1958:
case 2981:
case 3873:
case 2235:
case 3285:
case 459:
case 2793:
case 2727:
case 2449:
case 595:
case 1711:
case 949:
case 3404:
case 1647:
case 2420:
case 1520:
case 1452:
case 2286:
case 2552:
case 778:
case 3758:
case 1731:
case 2354:
case 3463:
case 2062:
case 4006:
case 3829:
case 509:
case 301:
case 1132:
case 1886:
case 1112:
case 1627:
case 1392:
case 303:
case 208:
case 4059:
case 2494:
case 2325:
case 1903:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1768568401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,];
var gg_b = "1768568401/";

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
