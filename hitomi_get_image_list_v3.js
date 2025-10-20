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
case 446:
case 3988:
case 3772:
case 578:
case 2374:
case 500:
case 2339:
case 3069:
case 4076:
case 2621:
case 1973:
case 2828:
case 1222:
case 1267:
case 2055:
case 1970:
case 2341:
case 825:
case 614:
case 2252:
case 52:
case 2206:
case 1025:
case 1466:
case 3181:
case 3268:
case 2237:
case 1515:
case 3664:
case 1979:
case 1005:
case 1011:
case 2330:
case 1107:
case 1432:
case 935:
case 3587:
case 2284:
case 746:
case 3311:
case 413:
case 396:
case 2601:
case 1360:
case 3866:
case 2398:
case 1588:
case 2097:
case 1399:
case 3403:
case 1026:
case 2205:
case 3646:
case 3150:
case 637:
case 1680:
case 3542:
case 2171:
case 2589:
case 3298:
case 525:
case 2850:
case 82:
case 1809:
case 983:
case 1683:
case 3153:
case 314:
case 3429:
case 402:
case 3326:
case 1820:
case 513:
case 3099:
case 2144:
case 2946:
case 3844:
case 1297:
case 2056:
case 159:
case 3384:
case 3749:
case 1823:
case 284:
case 851:
case 749:
case 375:
case 2859:
case 1393:
case 3409:
case 399:
case 2754:
case 2512:
case 3352:
case 2196:
case 1800:
case 3337:
case 802:
case 1390:
case 3896:
case 2368:
case 2580:
case 1803:
case 751:
case 1255:
case 3865:
case 1689:
case 3694:
case 211:
case 1006:
case 3423:
case 1052:
case 2577:
case 93:
case 3740:
case 269:
case 3420:
case 1338:
case 1724:
case 3743:
case 1037:
case 1829:
case 2719:
case 1575:
case 1300:
case 2137:
case 2543:
case 2359:
case 474:
case 390:
case 3777:
case 1303:
case 3499:
case 442:
case 624:
case 740:
case 1890:
case 2152:
case 3396:
case 3029:
case 3837:
case 2106:
case 51:
case 101:
case 2904:
case 2868:
case 1746:
case 1122:
case 823:
case 3000:
case 98:
case 1484:
case 3961:
case 1913:
case 255:
case 1982:
case 331:
case 1096:
case 4016:
case 3604:
case 1778:
case 3712:
case 2257:
case 260:
case 1631:
case 1426:
case 1954:
case 3686:
case 3582:
case 557:
case 2353:
case 673:
case 1640:
case 1561:
case 1899:
case 423:
case 2295:
case 3624:
case 2675:
case 933:
case 1452:
case 3510:
case 2350:
case 3826:
case 2422:
case 165:
case 2467:
case 842:
case 2531:
case 2092:
case 774:
case 742:
case 506:
case 1323:
case 1919:
case 440:
case 288:
case 3789:
case 709:
case 3975:
case 1745:
case 1617:
case 2833:
case 985:
case 1425:
case 2770:
case 1066:
case 690:
case 2244:
case 147:
case 2830:
case 2308:
case 3198:
case 1292:
case 515:
case 81:
case 2455:
case 3469:
case 71:
case 2036:
case 2111:
case 3395:
case 1860:
case 1548:
case 406:
case 2898:
case 2271:
case 2328:
case 2497:
case 3948:
case 2779:
case 2734:
case 373:
case 2027:
case 2062:
case 221:
case 3976:
case 2125:
case 3174:
case 41:
case 3139:
case 3058:
case 542:
case 217:
case 3214:
case 757:
case 618:
case 1947:
case 3460:
case 2648:
case 2265:
case 692:
case 3141:
case 2676:
case 2296:
case 1988:
case 919:
case 3973:
case 137:
case 3718:
case 2687:
case 3267:
case 2564:
case 2238:
case 2951:
case 356:
case 2791:
case 641:
case 2293:
case 307:
case 3466:
case 2074:
case 1717:
case 3025:
case 2039:
case 2290:
case 3162:
case 3127:
case 1268:
case 1534:
case 659:
case 1901:
case 293:
case 532:
case 3979:
case 2807:
case 3785:
case 1063:
case 3432:
case 128:
case 486:
case 1587:
case 3363:
case 994:
case 2679:
case 1305:
case 1458:
case 363:
case 905:
case 1573:
case 3360:
case 2481:
case 2030:
case 17:
case 1895:
case 2109:
case 1646:
case 1403:
case 889:
case 3465:
case 3496:
case 2892:
case 3680:
case 586:
case 2356:
case 3516:
case 2302:
case 3704:
case 1871:
case 1400:
case 4054:
case 3683:
case 3612:
case 656:
case 1153:
case 830:
case 270:
case 607:
case 791:
case 1429:
case 916:
case 114:
case 1326:
case 464:
case 4019:
case 1230:
case 2120:
case 2983:
case 2594:
case 2912:
case 891:
case 359:
case 2761:
case 3393:
case 199:
case 491:
case 1241:
case 943:
case 3471:
case 1352:
case 2450:
case 2546:
case 1337:
case 1896:
case 2100:
case 3255:
case 2642:
case 2453:
case 3803:
case 1038:
case 732:
case 3786:
case 430:
case 2129:
case 3052:
case 1239:
case 3135:
case 3006:
case 663:
case 1916:
case 1114:
case 4013:
case 3724:
case 1420:
case 2989:
case 2367:
case 3942:
case 272:
case 1090:
case 4010:
case 832:
case 3829:
case 2068:
case 1852:
case 3300:
case 3575:
case 1168:
case 2524:
case 2610:
case 3893:
case 1365:
case 3:
case 1777:
case 3303:
case 647:
case 3649:
case 1396:
case 1029:
case 2613:
case 1837:
case 248:
case 3122:
case 2138:
case 1228:
case 3484:
case 4042:
case 3778:
case 597:
case 967:
case 3426:
case 3838:
case 2822:
case 2867:
case 3065:
case 1208:
case 3794:
case 1686:
case 2392:
case 2468:
case 3102:
case 3561:
case 1020:
case 3899:
case 839:
case 3640:
case 739:
case 3309:
case 2199:
case 66:
case 2802:
case 204:
case 2619:
case 1023:
case 1371:
case 3452:
case 3643:
case 2504:
case 118:
case 2940:
case 1826:
case 1438:
case 3323:
case 2050:
case 1884:
case 1344:
case 1009:
case 1789:
case 897:
case 582:
case 3197:
case 3617:
case 652:
case 2788:
case 3066:
case 4034:
case 926:
case 4079:
case 124:
case 2223:
case 2474:
case 601:
case 797:
case 347:
case 568:
case 3672:
case 1253:
case 3576:
case 1811:
case 2721:
case 1618:
case 2441:
case 2163:
case 1469:
case 1366:
case 187:
case 1948:
case 1332:
case 945:
case 1825:
case 2715:
case 2701:
case 910:
case 4073:
case 1139:
case 2433:
case 1460:
case 665:
case 2362:
case 3591:
case 276:
case 1259:
case 3155:
case 2028:
case 2203:
case 3405:
case 1141:
case 736:
case 2855:
case 1463:
case 3057:
case 539:
case 497:
case 4087:
case 1957:
case 828:
case 1434:
case 1797:
case 2851:
case 3249:
case 2282:
case 651:
case 2170:
case 3627:
case 3733:
case 1888:
case 1681:
case 728:
case 1348:
case 3566:
case 581:
case 3076:
case 1204:
case 969:
case 2464:
case 927:
case 4069:
case 23:
case 796:
case 3231:
case 2187:
case 911:
case 896:
case 77:
case 3887:
case 2705:
case 1628:
case 2962:
case 3347:
case 1224:
case 2134:
case 2581:
case 496:
case 3488:
case 1391:
case 2219:
case 313:
case 1815:
case 1470:
case 283:
case 3879:
case 3240:
case 678:
case 3532:
case 600:
case 1164:
case 1966:
case 1995:
case 1487:
case 4060:
case 984:
case 3607:
case 2254:
case 3557:
case 3768:
case 1971:
case 966:
case 1019:
case 799:
case 3909:
case 775:
case 899:
case 235:
case 351:
case 3217:
case 57:
case 2992:
case 3354:
case 3416:
case 1944:
case 2609:
case 1375:
case 2883:
case 2812:
case 1767:
case 1500:
case 1722:
case 2559:
case 881:
case 3319:
case 646:
case 3692:
case 528:
case 2880:
case 3272:
case 781:
case 1054:
case 1503:
case 1442:
case 3183:
case 3112:
case 1653:
case 1756:
case 3061:
case 1520:
case 1082:
case 1965:
case 3903:
case 4090:
case 1010:
case 481:
case 189:
case 1523:
case 3900:
case 3544:
case 2889:
case 378:
case 2349:
case 3929:
case 3382:
case 191:
case 2004:
case 2553:
case 2935:
case 3313:
case 1361:
case 714:
case 2784:
case 475:
case 2478:
case 2600:
case 3189:
case 3571:
case 2142:
case 3310:
case 1816:
case 2550:
case 180:
case 2831:
case 1454:
case 1906:
case 1104:
case 431:
case 3131:
case 3813:
case 2690:
case 587:
case 892:
case 374:
case 2849:
case 2486:
case 1668:
case 1861:
case 718:
case 2389:
case 2967:
case 2273:
case 2424:
case 2693:
case 3475:
case 4029:
case 1316:
case 309:
case 792:
case 1419:
case 2094:
case 2113:
case 2182:
case 342:
case 168:
case 890:
case 2154:
case 2796:
case 4009:
case 1538:
case 3854:
case 2046:
case 182:
case 831:
case 4020:
case 1593:
case 1984:
case 3714:
case 1410:
case 3506:
case 2383:
case 1590:
case 2840:
case 524:
case 2234:
case 2699:
case 4023:
case 61:
case 3461:
case 1413:
case 323:
case 3172:
case 773:
case 1278:
case 2757:
case 2485:
case 1118:
case 2997:
case 592:
case 3334:
case 1246:
case 887:
case 962:
case 2663:
case 3476:
case 233:
case 1315:
case 873:
case 3280:
case 674:
case 2574:
case 1447:
case 609:
case 3781:
case 3015:
case 1727:
case 1633:
case 136:
case 934:
case 3963:
case 1911:
case 2351:
case 1876:
case 3370:
case 2242:
case 1185:
case 531:
case 197:
case 3021:
case 3373:
case 1641:
case 2598:
case 2669:
case 3491:
case 640:
case 2795:
case 473:
case 3088:
case 2530:
case 2045:
case 1294:
case 3847:
case 623:
case 955:
case 1321:
case 31:
case 3797:
case 3479:
case 1730:
case 3434:
case 1401:
case 1870:
case 407:
case 3681:
case 1151:
case 3888:
case 2845:
case 1662:
case 3348:
case 1958:
case 2760:
case 2507:
case 1798:
case 1076:
case 944:
case 632:
case 2657:
case 220:
case 3628:
case 456:
case 1048:
case 3821:
case 1887:
case 2763:
case 863:
case 2536:
case 3224:
case 2695:
case 463:
case 2562:
case 2101:
case 1243:
case 2115:
case 222:
case 3391:
case 856:
case 2666:
case 2451:
case 3286:
case 970:
case 908:
case 3801:
case 1739:
case 3470:
case 559:
case 1834:
case 3558:
case 2318:
case 3164:
case 3966:
case 4011:
case 1091:
case 1532:
case 3487:
case 707:
case 1421:
case 1741:
case 1607:
case 386:
case 1557:
case 3971:
case 102:
case 2790:
case 2950:
case 1075:
case 1909:
case 2644:
case 149:
case 2953:
case 2535:
case 459:
case 151:
case 1177:
case 1217:
case 3767:
case 3722:
case 1416:
case 2324:
case 3650:
case 1180:
case 2878:
case 294:
case 2291:
case 3178:
case 1692:
case 1920:
case 3442:
case 1183:
case 1112:
case 3653:
case 2489:
case 4084:
case 1635:
case 2049:
case 2304:
case 507:
case 3013:
case 3702:
case 1061:
case 3520:
case 4052:
case 219:
case 3965:
case 2959:
case 389:
case 4037:
case 1544:
case 2894:
case 178:
case 1842:
case 2031:
case 2914:
case 3361:
case 859:
case 1313:
case 3509:
case 556:
case 2483:
case 3285:
case 2412:
case 1189:
case 1571:
case 3659:
case 380:
case 2089:
case 245:
case 2804:
case 1990:
case 1750:
case 2968:
case 4065:
case 3792:
case 2394:
case 3104:
case 1753:
case 210:
case 1016:
case 1131:
case 1993:
case 3599:
case 1251:
case 3668:
case 452:
case 2723:
case 1813:
case 750:
case 1342:
case 401:
case 109:
case 2720:
case 2556:
case 1475:
case 1810:
case 865:
case 2652:
case 3245:
case 2443:
case 142:
case 3419:
case 2606:
case 1149:
case 850:
case 4:
case 2161:
case 2703:
case 752:
case 368:
case 2012:
case 801:
case 2684:
case 2567:
case 2700:
case 1759:
case 140:
case 2431:
case 1602:
case 3186:
case 1656:
case 3984:
case 3735:
case 2729:
case 2378:
case 298:
case 1552:
case 1506:
case 1140:
case 1714:
case 2346:
case 3124:
case 3926:
case 3413:
case 2201:
case 212:
case 2215:
case 123:
case 1461:
case 3569:
case 3891:
case 995:
case 3698:
case 979:
case 565:
case 1172:
case 2930:
case 3118:
case 1212:
case 904:
case 1728:
case 1379:
case 2605:
case 3246:
case 1280:
case 3315:
case 2555:
case 2933:
case 1277:
case 3630:
case 1960:
case 1117:
case 3447:
case 3633:
case 1015:
case 3727:
case 3762:
case 2364:
case 3034:
case 3905:
case 24:
case 3079:
case 1370:
case 3563:
case 3876:
case 668:
case 1505:
case 847:
case 1655:
case 1289:
case 2216:
case 3707:
case 3560:
case 2176:
case 3925:
case 2939:
case 1491:
case 682:
case 2051:
case 552:
case 3070:
case 948:
case 3674:
case 1708:
case 1847:
case 46:
case 3639:
case 1088:
case 501:
case 11:
case 3073:
case 267:
case 1969:
case 1387:
case 1589:
case 1171:
case 761:
case 1205:
case 2026:
case 2399:
case 494:
case 719:
case 3263:
case 1853:
case 2465:
case 2612:
case 2683:
case 3459:
case 2809:
case 405:
case 2084:
case 2516:
case 1850:
case 3260:
case 861:
case 3414:
case 1435:
case 184:
case 1978:
case 1056:
case 1002:
case 259:
case 2297:
case 3912:
case 3983:
case 4031:
case 1994:
case 2800:
case 2471:
case 3450:
case 1754:
case 3103:
case 1616:
case 693:
case 1165:
case 3453:
case 3642:
case 2255:
case 1022:
case 2689:
case 2803:
case 1368:
case 2390:
case 805:
case 4049:
case 169:
case 127:
case 2786:
case 344:
case 2006:
case 419:
case 1225:
case 2052:
case 2829:
case 894:
case 372:
case 1719:
case 3068:
case 705:
case 3775:
case 2942:
case 1621:
case 1436:
case 1828:
case 3041:
case 2973:
case 1157:
case 3687:
case 1945:
case 1339:
case 989:
case 2222:
case 1407:
case 2466:
case 3158:
case 1688:
case 1881:
case 3039:
case 3862:
case 3074:
case 2987:
case 207:
case 1341:
case 3293:
case 3673:
case 443:
case 3355:
case 2501:
case 816:
case 3408:
case 2127:
case 2162:
case 2651:
case 2858:
case 3748:
case 2979:
case 1226:
case 2136:
case 594:
case 70:
case 2785:
case 964:
case 393:
case 416:
case 743:
case 3098:
case 3428:
case 1330:
case 3836:
case 263:
case 1808:
case 2363:
case 3299:
case 3679:
case 3634:
case 4017:
case 672:
case 1427:
case 1398:
case 1462:
case 968:
case 2617:
case 3788:
case 598:
case 3220:
case 1773:
case 403:
case 512:
case 247:
case 1830:
case 3223:
case 1787:
case 3160:
case 648:
case 1898:
case 526:
case 3209:
case 729:
case 3163:
case 1839:
case 1062:
case 3647:
case 679:
case 980:
case 3081:
case 1779:
case 1328:
case 1985:
case 604:
case 1517:
case 117:
case 3433:
case 467:
case 2235:
case 121:
case 429:
case 3229:
case 2155:
case 2869:
case 2591:
case 376:
case 1648:
case 1841:
case 3028:
case 2764:
case 545:
case 2947:
case 803:
case 1676:
case 703:
case 39:
case 2411:
case 3610:
case 1543:
case 826:
case 2227:
case 2262:
case 3524:
case 2575:
case 1540:
case 529:
case 1904:
case 2649:
case 2:
case 2303:
case 3931:
case 3586:
case 3193:
case 2484:
case 445:
case 4089:
case 812:
case 2167:
case 2910:
case 2746:
case 2426:
case 2838:
case 1314:
case 898:
case 3867:
case 155:
case 2913:
case 3949:
case 410:
case 2329:
case 810:
case 2640:
case 2899:
case 745:
case 379:
case 2561:
case 395:
case 1353:
case 1549:
case 2794:
case 2102:
case 1266:
case 3856:
case 3802:
case 162:
case 2406:
case 845:
case 3199:
case 503:
case 412:
case 1531:
case 3654:
case 1422:
case 3053:
case 2320:
case 3940:
case 3716:
case 2207:
case 3943:
case 2919:
case 426:
case 69:
case 1892:
case 3171:
case 1263:
case 913:
case 2646:
case 3205:
case 3211:
case 754:
case 2298:
case 2678:
case 2871:
case 1260:
case 3946:
case 2326:
case 3710:
case 2429:
case 1123:
case 3435:
case 3002:
case 2384:
case 2749:
case 3713:
case 3782:
case 1912:
case 583:
case 2230:
case 3754:
case 1450:
case 53:
case 2306:
case 3583:
case 2352:
case 3512:
case 1578:
case 1269:
case 275:
case 3616:
case 735:
case 3580:
case 2159:
case 3067:
case 1642:
case 2114:
case 2916:
case 2740:
case 2093:
case 2274:
case 144:
case 311:
case 454:
case 1835:
case 281:
case 2090:
case 2743:
case 1989:
case 1322:
case 1367:
case 2420:
case 3157:
case 2069:
case 1687:
case 877:
case 92:
case 2772:
case 4085:
case 783:
case 3055:
case 2857:
case 777:
case 3132:
case 3252:
case 1039:
case 1158:
case 1293:
case 2921:
case 3341:
case 1355:
case 353:
case 2579:
case 2181:
case 3237:
case 638:
case 902:
case 2063:
case 3226:
case 1748:
case 1807:
case 949:
case 2664:
case 193:
case 2587:
case 1776:
case 1098:
case 4018:
case 1836:
case 3330:
case 1397:
case 3808:
case 3166:
case 3964:
case 1634:
case 3195:
case 1299:
case 3551:
case 2305:
case 1679:
case 611:
case 73:
case 1030:
case 483:
case 535:
case 1481:
case 2108:
case 477:
case 1788:
case 35:
case 1307:
case 3773:
case 571:
case 3830:
case 3244:
case 1336:
case 2547:
case 2991:
case 1439:
case 1223:
case 1474:
case 224:
case 940:
case 2751:
case 2618:
case 1721:
case 3455:
case 2198:
case 1917:
case 1160:
case 660:
case 2250:
case 585:
case 3898:
case 655:
case 2469:
case 4064:
case 1209:
case 1441:
case 3105:
case 3111:
case 1081:
case 3839:
case 1701:
case 3062:
case 3027:
case 48:
case 273:
case 2332:
case 3985:
case 2948:
case 3497:
case 3779:
case 3328:
case 287:
case 1430:
case 2214:
case 317:
case 3517:
case 2357:
case 1229:
case 2139:
case 1433:
case 2174:
case 321:
case 2976:
case 733:
case 3841:
case 3648:
case 974:
case 176:
case 2685:
case 1498:
case 1362:
case 1327:
case 1200:
case 909:
case 1518:
case 688:
case 3676:
case 942:
case 558:
case 1203:
case 3359:
case 885:
case 3543:
case 65:
case 3402:
case 2281:
case 3137:
case 2852:
case 1190:
case 2806:
case 58:
case 3904:
case 3106:
case 2837:
case 1682:
case 2029:
case 1613:
case 3152:
case 2396:
case 3868:
case 2499:
case 2777:
case 1014:
case 290:
case 2000:
case 771:
case 3232:
case 1867:
case 2783:
case 2712:
case 3314:
case 458:
case 360:
case 91:
case 231:
case 1335:
case 2513:
case 3353:
case 1468:
case 2686:
case 858:
case 2371:
case 2023:
case 1619:
case 362:
case 1802:
case 3266:
case 1856:
case 2510:
case 3675:
case 621:
case 1654:
case 3092:
case 1716:
case 4078:
case 2438:
case 957:
case 1940:
case 218:
case 3422:
case 388:
case 3742:
case 2975:
case 3924:
case 2884:
case 1943:
case 292:
case 334:
case 3644:
case 1877:
case 1024:
case 2971:
case 1737:
case 264:
case 2019:
case 1494:
case 1514:
case 1992:
case 1086:
case 1706:
case 2529:
case 3953:
case 135:
case 3040:
case 1620:
case 620:
case 3671:
case 1559:
case 394:
case 2500:
case 2767:
case 2146:
case 1609:
case 3489:
case 2442:
case 2178:
case 470:
case 1880:
case 772:
case 2503:
case 444:
case 870:
case 1629:
case 2013:
case 3304:
case 361:
case 2194:
case 2756:
case 2702:
case 3894:
case 770:
case 154:
case 472:
case 3799:
case 1784:
case 1004:
case 616:
case 3276:
case 1446:
case 3031:
case 1603:
case 1550:
case 2659:
case 1478:
case 1600:
case 2376:
case 343:
case 1282:
case 3261:
case 1851:
case 1658:
case 4039:
case 30:
case 544:
case 2797:
case 2957:
case 2932:
case 3928:
case 2348:
case 2681:
case 3845:
case 3121:
case 13:
case 3507:
case 3981:
case 2821:
case 1085:
case 3632:
case 1219:
case 2391:
case 3666:
case 619:
case 2224:
case 3695:
case 1581:
case 3562:
case 3527:
case 177:
case 1907:
case 2558:
case 1372:
case 2815:
case 4030:
case 2995:
case 493:
case 2966:
case 1528:
case 570:
case 3864:
case 508:
case 1018:
case 2118:
case 645:
case 2891:
case 1660:
case 1541:
case 610:
case 1064:
case 3933:
case 1732:
case 1539:
case 950:
case 776:
case 2630:
case 34:
case 2911:
case 236:
case 2762:
case 2727:
case 2633:
case 3364:
case 1242:
case 952:
case 4028:
case 548:
case 476:
case 49:
case 3974:
case 3345:
case 2925:
case 1669:
case 2087:
case 901:
case 2707:
case 2848:
case 3216:
case 2641:
case 3051:
case 698:
case 3417:
case 1533:
case 18:
case 1795:
case 367:
case 2073:
case 2674:
case 2294:
case 448:
case 4059:
case 576:
case 1831:
case 3709:
case 280:
case 1638:
case 2042:
case 3089:
case 879:
case 310:
case 59:
case 2906:
case 3394:
case 2952:
case 1922:
case 1110:
case 1486:
case 2861:
case 2599:
case 1270:
case 3723:
case 1094:
case 4014:
case 2419:
case 3443:
case 1113:
case 64:
case 3288:
case 1693:
case 3556:
case 1273:
case 1424:
case 1796:
case 1154:
case 1902:
case 1377:
case 1765:
case 268:
case 326:
case 185:
case 4050:
case 3626:
case 1046:
case 2538:
case 2264:
case 3700:
case 1383:
case 398:
case 3077:
case 748:
case 2410:
case 2875:
case 3824:
case 2984:
case 282:
case 3729:
case 479:
case 171:
case 3449:
case 1119:
case 3215:
case 3201:
case 2413:
case 667:
case 629:
case 3886:
case 1380:
case 2124:
case 1234:
case 404:
case 2590:
case 848:
case 2075:
case 1644:
case 2909:
case 1950:
case 2768:
case 3623:
case 3494:
case 1790:
case 1043:
case 3706:
case 928:
case 3514:
case 2177:
case 484:
case 1040:
case 1793:
case 4002:
case 4056:
case 194:
case 2923:
case 996:
case 3343:
case 3559:
case 711:
case 1738:
case 3609:
case 769:
case 2112:
case 2183:
case 105:
case 3340:
case 2920:
case 869:
case 3880:
case 2272:
case 1386:
case 2565:
case 2061:
case 427:
case 469:
case 2635:
case 3629:
case 1304:
case 1894:
case 553:
case 2544:
case 1799:
case 2313:
case 1696:
case 3935:
case 3553:
case 3004:
case 1276:
case 2929:
case 3349:
case 1480:
case 1914:
case 3446:
case 200:
case 838:
case 2842:
case 1665:
case 3142:
case 1483:
case 2571:
case 1248:
case 3550:
case 738:
case 3726:
case 784:
case 3600:
case 3478:
case 3658:
case 999:
case 1188:
case 3851:
case 3282:
case 143:
case 527:
case 2870:
case 569:
case 2401:
case 3213:
case 2249:
case 975:
case 511:
case 10:
case 3210:
case 2873:
case 2733:
case 1845:
case 2662:
case 2151:
case 33:
case 1657:
case 3187:
case 1981:
case 3927:
case 3962:
case 2347:
case 3085:
case 3711:
case 2048:
case 122:
case 1115:
case 2243:
case 213:
case 3445:
case 3219:
case 1562:
case 1527:
case 3936:
case 3134:
case 1695:
case 1318:
case 2240:
case 2834:
case 377:
case 2879:
case 3725:
case 1017:
case 2774:
case 383:
case 654:
case 1451:
case 538:
case 2636:
case 116:
case 914:
case 2091:
case 466:
case 1072:
case 2607:
case 2212:
case 3485:
case 817:
case 821:
case 4007:
case 333:
case 1191:
case 2280:
case 588:
case 1605:
case 2334:
case 1818:
case 717:
case 3732:
case 3663:
case 658:
case 2697:
case 2525:
case 3574:
case 562:
case 3817:
case 103:
case 2015:
case 2655:
case 2289:
case 3418:
case 1472:
case 1974:
case 685:
case 1939:
case 2491:
case 560:
case 990:
case 2373:
case 555:
case 2021:
case 1216:
case 3669:
case 1885:
case 3598:
case 3147:
case 1417:
case 38:
case 3795:
case 671:
case 1941:
case 21:
case 421:
case 129:
case 3530:
case 2088:
case 2708:
case 417:
case 3045:
case 2750:
case 1968:
case 2990:
case 2622:
case 3638:
case 3831:
case 2131:
case 2016:
case 110:
case 2753:
case 3287:
case 1394:
case 358:
case 3744:
case 2342:
case 3922:
case 3389:
case 3849:
case 3270:
case 1637:
case 3690:
case 2813:
case 734:
case 242:
case 3182:
case 3094:
case 788:
case 1502:
case 521:
case 3693:
case 1556:
case 3273:
case 3956:
case 1684:
case 3078:
case 3796:
case 215:
case 3765:
case 1012:
case 1703:
case 3377:
case 2999:
case 1626:
case 2759:
case 1522:
case 1700:
case 2854:
case 860:
case 2140:
case 3383:
case 55:
case 371:
case 855:
case 1729:
case 68:
case 2656:
case 755:
case 1215:
case 1175:
case 462:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760932802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,];
var gg_b = "1760932802/";

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
