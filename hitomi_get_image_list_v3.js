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
case 2294:
case 155:
case 1645:
case 2964:
case 3349:
case 3423:
case 3062:
case 2070:
case 907:
case 165:
case 252:
case 209:
case 1490:
case 1912:
case 49:
case 1529:
case 432:
case 1417:
case 1005:
case 3325:
case 3219:
case 1966:
case 2870:
case 3862:
case 3160:
case 2559:
case 3146:
case 3298:
case 2825:
case 2531:
case 1464:
case 184:
case 2595:
case 3530:
case 3370:
case 297:
case 2362:
case 1148:
case 802:
case 2791:
case 2631:
case 3194:
case 2990:
case 2412:
case 2260:
case 3272:
case 2119:
case 3261:
case 1018:
case 677:
case 944:
case 2753:
case 2440:
case 104:
case 377:
case 2025:
case 1979:
case 873:
case 3441:
case 999:
case 1549:
case 2986:
case 343:
case 1400:
case 2633:
case 335:
case 200:
case 847:
case 4014:
case 786:
case 2533:
case 1920:
case 1206:
case 865:
case 1649:
case 17:
case 264:
case 706:
case 2518:
case 3443:
case 3215:
case 3329:
case 1009:
case 421:
case 2387:
case 541:
case 2108:
case 3263:
case 254:
case 3786:
case 1525:
case 1486:
case 3887:
case 850:
case 884:
case 1570:
case 2900:
case 330:
case 942:
case 2699:
case 2045:
case 1280:
case 630:
case 811:
case 2599:
case 1743:
case 990:
case 1670:
case 3421:
case 758:
case 34:
case 182:
case 2505:
case 2845:
case 3873:
case 3514:
case 1128:
case 2254:
case 1232:
case 517:
case 2029:
case 1975:
case 1059:
case 804:
case 3700:
case 2158:
case 169:
case 3087:
case 3614:
case 3137:
case 2701:
case 285:
case 4067:
case 3080:
case 1273:
case 3832:
case 2081:
case 3734:
case 161:
case 1548:
case 4060:
case 92:
case 1648:
case 622:
case 3594:
case 3024:
case 3328:
case 2922:
case 2519:
case 3880:
case 3182:
case 1952:
case 2934:
case 2402:
case 3856:
case 3489:
case 3757:
case 3913:
case 2436:
case 876:
case 3381:
case 3006:
case 549:
case 2356:
case 3965:
case 2828:
case 1863:
case 1145:
case 3231:
case 938:
case 212:
case 698:
case 2028:
case 2324:
case 1927:
case 1129:
case 3660:
case 1422:
case 2661:
case 4094:
case 2452:
case 1902:
case 2957:
case 2572:
case 1407:
case 278:
case 1058:
case 3546:
case 810:
case 4054:
case 631:
case 2447:
case 3044:
case 1872:
case 991:
case 1861:
case 3976:
case 2942:
case 851:
case 1098:
case 1394:
case 3383:
case 718:
case 2492:
case 2105:
case 4:
case 3114:
case 2396:
case 2563:
case 646:
case 119:
case 2658:
case 1528:
case 3797:
case 3604:
case 533:
case 2711:
case 346:
case 2776:
case 3504:
case 567:
case 2558:
case 3218:
case 772:
case 528:
case 3255:
case 624:
case 4004:
case 815:
case 2048:
case 3626:
case 3969:
case 3167:
case 176:
case 1216:
case 70:
case 1442:
case 3896:
case 1819:
case 1271:
case 2133:
case 3526:
case 1992:
case 1785:
case 2155:
case 2118:
case 3096:
case 540:
case 2608:
case 281:
case 2769:
case 1346:
case 3554:
case 592:
case 1978:
case 1125:
case 2077:
case 2861:
case 3469:
case 1447:
case 2774:
case 3162:
case 1910:
case 917:
case 3249:
case 1997:
case 2098:
case 1267:
case 1615:
case 3225:
case 542:
case 2061:
case 3060:
case 1515:
case 1558:
case 2628:
case 2216:
case 276:
case 3580:
case 2442:
case 2581:
case 941:
case 2410:
case 3656:
case 1083:
case 2262:
case 812:
case 2992:
case 3680:
case 2497:
case 1133:
case 2271:
case 2819:
case 3094:
case 3411:
case 1608:
case 3524:
case 3632:
case 1883:
case 936:
case 1155:
case 3894:
case 3792:
case 770:
case 3985:
case 114:
case 2978:
case 498:
case 3747:
case 1214:
case 1077:
case 3361:
case 2125:
case 2360:
case 3372:
case 396:
case 2346:
case 2808:
case 1306:
case 599:
case 261:
case 210:
case 1131:
case 3:
case 76:
case 424:
case 648:
case 544:
case 325:
case 2583:
case 2677:
case 1519:
case 716:
case 431:
case 1109:
case 1907:
case 4044:
case 3229:
case 2457:
case 2008:
case 3736:
case 3358:
case 3696:
case 2337:
case 1402:
case 1934:
case 3702:
case 3544:
case 779:
case 1356:
case 1738:
case 3837:
case 1380:
case 1436:
case 801:
case 737:
case 1230:
case 1765:
case 881:
case 1324:
case 1028:
case 1672:
case 2927:
case 1957:
case 3187:
case 1713:
case 1332:
case 2058:
case 178:
case 3308:
case 1452:
case 1950:
case 632:
case 69:
case 862:
case 2549:
case 93:
case 3156:
case 1793:
case 39:
case 3921:
case 889:
case 940:
case 3720:
case 809:
case 27:
case 3439:
case 3082:
case 2831:
case 154:
case 180:
case 1655:
case 1751:
case 4071:
case 3359:
case 2009:
case 4062:
case 3830:
case 1387:
case 771:
case 3571:
case 1900:
case 897:
case 2330:
case 1739:
case 3395:
case 3562:
case 1226:
case 2570:
case 3106:
case 2859:
case 693:
case 2670:
case 3281:
case 202:
case 259:
case 1254:
case 3943:
case 1029:
case 1505:
case 282:
case 1845:
case 2382:
case 273:
case 3493:
case 1701:
case 1484:
case 1158:
case 591:
case 800:
case 3144:
case 247:
case 1070:
case 3673:
case 1964:
case 2645:
case 2545:
case 3814:
case 2805:
case 265:
case 708:
case 621:
case 189:
case 2417:
case 3355:
case 3318:
case 1703:
case 2899:
case 2490:
case 109:
case 3435:
case 2529:
case 864:
case 2912:
case 854:
case 1870:
case 2629:
case 949:
case 443:
case 1479:
case 435:
case 1161:
case 1049:
case 805:
case 3923:
case 197:
case 1371:
case 1531:
case 71:
case 3399:
case 1631:
case 1735:
case 260:
case 2033:
case 1316:
case 2183:
case 2244:
case 211:
case 3403:
case 1695:
case 1791:
case 2833:
case 3196:
case 4073:
case 2018:
case 756:
case 52:
case 1990:
case 1246:
case 1609:
case 1412:
case 1509:
case 1768:
case 766:
case 2723:
case 2979:
case 1025:
case 2177:
case 564:
case 3772:
case 2760:
case 3874:
case 3513:
case 2746:
case 358:
case 2253:
case 2448:
case 3761:
case 3665:
case 1010:
case 3565:
case 241:
case 3392:
case 730:
case 368:
case 823:
case 2998:
case 3798:
case 1810:
case 1527:
case 2657:
case 1602:
case 3496:
case 2385:
case 1842:
case 2291:
case 3217:
case 4038:
case 2878:
case 1536:
case 82:
case 3168:
case 488:
case 2203:
case 1948:
case 191:
case 1796:
case 3153:
case 2092:
case 1636:
case 1311:
case 1498:
case 1241:
case 606:
case 2892:
case 2607:
case 2794:
case 4065:
case 2634:
case 2522:
case 2117:
case 1652:
case 2919:
case 3191:
case 505:
case 4013:
case 2374:
case 408:
case 1179:
case 1977:
case 2622:
case 1472:
case 306:
case 2847:
case 413:
case 1313:
case 1732:
case 3708:
case 1822:
case 2201:
case 123:
case 1592:
case 4011:
case 1022:
case 2239:
case 562:
case 1463:
case 1415:
case 1007:
case 1184:
case 589:
case 1780:
case 2389:
case 1458:
case 552:
case 2836:
case 4076:
case 1756:
case 739:
case 3302:
case 2052:
case 1338:
case 2737:
case 3456:
case 2610:
case 12:
case 3715:
case 2100:
case 2697:
case 2542:
case 2642:
case 891:
case 471:
case 3763:
case 597:
case 3424:
case 1175:
case 2915:
case 1057:
case 3432:
case 3904:
case 3089:
case 1408:
case 2958:
case 3139:
case 2002:
case 4069:
case 1050:
case 3709:
case 245:
case 3568:
case 2931:
case 1136:
case 2995:
case 2782:
case 2265:
case 1301:
case 267:
case 30:
case 228:
case 2445:
case 2213:
case 3668:
case 2020:
case 3535:
case 3375:
case 3257:
case 3821:
case 2343:
case 2517:
case 1679:
case 2122:
case 3591:
case 826:
case 479:
case 3982:
case 2730:
case 1339:
case 3795:
case 3691:
case 1579:
case 1152:
case 2617:
case 437:
case 2909:
case 1459:
case 453:
case 3487:
case 3635:
case 3731:
case 959:
case 1886:
case 240:
case 195:
case 1431:
case 731:
case 3113:
case 1787:
case 303:
case 581:
case 3165:
case 603:
case 2875:
case 4035:
case 4091:
case 1945:
case 2664:
case 292:
case 4053:
case 1773:
case 3207:
case 3043:
case 372:
case 1666:
case 1640:
case 1540:
case 4068:
case 887:
case 97:
case 1800:
case 1566:
case 1409:
case 3088:
case 2959:
case 3384:
case 672:
case 383:
case 2323:
case 3841:
case 3501:
case 1970:
case 4093:
case 2866:
case 2500:
case 960:
case 3176:
case 1368:
case 2999:
case 1433:
case 950:
case 3111:
case 2110:
case 3705:
case 842:
case 2714:
case 1353:
case 1455:
case 3914:
case 2012:
case 1285:
case 3539:
case 2040:
case 1864:
case 1762:
case 2425:
case 3379:
case 895:
case 3023:
case 107:
case 3551:
case 2470:
case 965:
case 1620:
case 3471:
case 2879:
case 3967:
case 3297:
case 2650:
case 2933:
case 3416:
case 955:
case 1817:
case 2276:
case 947:
case 674:
case 3651:
case 1890:
case 3718:
case 722:
case 1303:
case 2686:
case 2955:
case 1017:
case 1274:
case 2918:
case 1090:
case 1684:
case 3312:
case 3733:
case 4001:
case 3823:
case 1178:
case 512:
case 1925:
case 2079:
case 3366:
case 3467:
case 1500:
case 2064:
case 2368:
case 3292:
case 2970:
case 337:
case 828:
case 48:
case 653:
case 3247:
case 363:
case 1999:
case 379:
case 3916:
case 2433:
case 3390:
case 561:
case 2716:
case 3688:
case 2418:
case 3278:
case 3770:
case 1066:
case 3588:
case 952:
case 1879:
case 2620:
case 3364:
case 65:
case 483:
case 840:
case 2949:
case 725:
case 2147:
case 207:
case 748:
case 472:
case 35:
case 3835:
case 66:
case 2499:
case 2520:
case 1276:
case 962:
case 1933:
case 149:
case 616:
case 3035:
case 1955:
case 515:
case 3868:
case 3749:
case 2178:
case 2925:
case 316:
case 1767:
case 909:
case 1782:
case 2050:
case 2136:
case 1931:
case 1213:
case 905:
case 1020:
case 3623:
case 2679:
case 3202:
case 1517:
case 1238:
case 796:
case 1590:
case 370:
case 1690:
case 1730:
case 3093:
case 2579:
case 1134:
case 3430:
case 3386:
case 2351:
case 295:
case 2000:
case 140:
case 2787:
case 3839:
case 2431:
case 1664:
case 3973:
case 192:
case 3729:
case 1875:
case 1321:
case 980:
case 849:
case 954:
case 675:
case 3641:
case 2127:
case 2512:
case 1157:
case 1959:
case 375:
case 3189:
case 3039:
case 2800:
case 2102:
case 1150:
case 912:
case 2834:
case 4074:
case 3980:
case 1036:
case 2732:
case 2313:
case 1754:
case 2981:
case 1201:
case 2647:
case 223:
case 2724:
case 2120:
case 547:
case 427:
case 366:
case 2288:
case 2022:
case 468:
case 555:
case 836:
case 2578:
case 3685:
case 3437:
case 458:
case 2756:
case 2034:
case 356:
case 2007:
case 3404:
case 3932:
case 1802:
case 3220:
case 1542:
case 3013:
case 313:
case 1481:
case 2857:
case 3906:
case 406:
case 3065:
case 3426:
case 613:
case 1642:
case 608:
case 504:
case 2175:
case 3143:
case 3284:
case 1293:
case 688:
case 3322:
case 1963:
case 550:
case 3674:
case 3574:
case 3813:
case 560:
case 3334:
case 3038:
case 3188:
case 1915:
case 1958:
case 511:
case 1448:
case 3076:
case 57:
case 1164:
case 2042:
case 1998:
case 3494:
case 793:
case 141:
case 2010:
case 2223:
case 3811:
case 2602:
case 2897:
case 2112:
case 2810:
case 2627:
case 136:
case 3589:
case 1235:
case 3141:
case 2842:
case 3876:
case 2502:
case 2166:
case 3777:
case 2948:
case 2376:
case 79:
case 2536:
case 2498:
case 573:
case 291:
case 3310:
case 1919:
case 3783:
case 1117:
case 1634:
case 1522:
case 371:
case 3240:
case 1892:
case 2241:
case 1794:
case 1607:
case 3460:
case 1374:
case 671:
case 1078:
case 1534:
case 2977:
case 2179:
case 203:
case 2603:
case 63:
case 2888:
case 1001:
case 2759:
case 932:
case 3564:
case 1839:
case 218:
case 86:
case 692:
case 1973:
case 85:
case 3664:
case 1729:
case 4017:
case 392:
case 2165:
case 2843:
case 33:
case 2503:
case 2234:
case 1252:
case 1641:
case 2088:
case 3959:
case 2384:
case 3157:
case 283:
case 1189:
case 816:
case 1039:
case 2138:
case 1523:
case 667:
case 3995:
case 3884:
case 1051:
case 853:
case 3931:
case 444:
case 328:
case 3445:
case 3213:
case 2668:
case 863:
case 367:
case 633:
case 879:
case 2021:
case 499:
case 2553:
case 546:
case 3517:
case 3590:
case 2375:
case 28:
case 2821:
case 3343:
case 3084:
case 3107:
case 1851:
case 170:
case 531:
case 2487:
case 2635:
case 4064:
case 781:
case 2982:
case 2691:
case 3617:
case 1093:
case 3879:
case 2169:
case 2297:
case 274:
case 2023:
case 2551:
case 16:
case 2462:
case 3470:
case 921:
case 2755:
case 3686:
case 1053:
case 2242:
case 3650:
case 3933:
case 3276:
case 1035:
case 2733:
case 598:
case 3955:
case 934:
case 3918:
case 394:
case 2340:
case 1749:
case 2593:
case 3079:
case 3767:
case 116:
case 2823:
case 3500:
case 3323:
case 712:
case 2841:
case 1292:
case 2705:
case 3812:
case 3714:
case 1003:
case 179:
case 3269:
case 2111:
case 1803:
case 3012:
case 442:
case 2914:
case 1174:
case 3040:
case 3066:
case 1770:
case 490:
case 2041:
case 4086:
case 1123:
case 808:
case 1777:
case 286:
case 813:
case 3878:
case 2168:
case 1342:
case 2885:
case 617:
case 700:
case 3092:
case 171:
case 1783:
case 2191:
case 2135:
case 3607:
case 3794:
case 1460:
case 42:
case 764:
case 206:
case 3507:
case 3847:
case 1446:
case 3078:
case 3374:
case 1869:
case 3622:
case 2347:
case 3253:
case 3448:
case 1944:
case 4007:
case 3746:
case 3268:
case 81:
case 1011:
case 3998:
case 2565:
case 2103:
case 705:
case 2638:
case 1279:
case 866:
case 535:
case 785:
case 543:
case 2798:
case 3657:
case 336:
case 3557:
case 1141:
case 1589:
case 3235:
case 2946:
case 438:
case 2378:
case 2576:
case 1838:
case 3802:
case 2715:
case 3100:
case 2758:
case 1013:
case 3697:
case 2480:
case 2889:
case 3737:
case 2456:
case 2101:
case 539:
case 1906:
case 1426:
case 2763:
case 2286:
case 3642:
case 1728:
case 2250:
case 2676:
case 1284:
case 1143:
case 3027:
case 1322:
case 1674:
case 3002:
case 709:
case 1188:
case 2904:
case 2089:
case 3958:
case 1454:
case 1980:
case 2708:
case 1956:
case 2406:
case 2151:
case 11:
case 2926:
case 797:
case 2669:
case 2200:
case 1924:
case 3428:
case 4010:
case 166:
case 3239:
case 1585:
case 1437:
case 4042:
case 3836:
case 2193:
case 2302:
case 3052:
case 1275:
case 1932:
case 213:
case 3221:
case 2906:
case 32:
case 1101:
case 1576:
case 2838:
case 1480:
case 2013:
case 208:
case 886:
case 747:
case 2728:
case 1676:
case 922:
case 2065:
case 2426:
case 2322:
case 2674:
case 1424:
case 3175:
case 2865:
case 2307:
case 3057:
case 2188:
case 2454:
case 1089:
case 3408:
case 2574:
case 288:
case 3981:
case 436:
case 1406:
case 623:
case 3807:
case 858:
case 2956:
case 1569:
case 1708:
case 338:
case 711:
case 3313:
case 827:
case 3724:
case 3822:
case 638:
case 3120:
case 868:
case 3365:
case 21:
case 3592:
case 323:
case 3463:
case 2585:
case 521:
case 266:
case 704:
case 441:
case 2357:
case 3415:
case 256:
case 3243:
case 3007:
case 1954:
case 3780:
case 2404:
case 2781:
case 3338:
case 3756:
case 1302:
case 3034:
case 2069:
case 3376:
case 3536:
case 186:
case 3948:
case 391:
case 1719:
case 1153:
case 3636:
case 1885:
case 2397:
case 1994:
case 3498:
case 3311:
case 1135:
case 593:
case 2783:
case 2266:
case 271:
case 1191:
case 1085:
case 924:
case 3461:
case 3977:
case 3552:
case 106:
case 2460:
case 1772:
case 3369:
case 3042:
case 1347:
case 1761:
case 1565:
case 3010:
case 3097:
case 168:
case 2494:
case 3527:
case 1798:
case 773:
case 2811:
case 3602:
case 1638:
case 1378:
case 3842:
case 1074:
case 532:
case 3502:
case 3166:
case 3627:
case 2589:
case 59:
case 782:
case 1023:
case 3949:
case 1462:
case 307:
case 1169:
case 1967:
case 3620:
case 751:
case 761:
case 1416:
case 1651:
case 4075:
case 2053:
case 3303:
case 607:
case 3017:
case 3405:
case 872:
case 3274:
case 2853:
case 3090:
case 1733:
case 3684:
case 1823:
case 2868:
case 2749:
case 520:
case 1340:
case 883:
case 1366:
case 253:
case 1841:
case 3970:
case 237:
case 2962:
case 1176:
case 2467:
case 3064:
case 3368:
case 80:
case 279:
case 1111:
case 1705:
case 2003:
case 263:
case 715:
case 4020:
case 3455:
case 428:
case 88:
case 1639:
case 3391:
case 2278:
case 2390:
case 2803:
case 1799:
case 3716:
case 326:
case 467:
case 3771:
case 3675:
case 626:
case 433:
case 525:
case 3285:
case 445:
case 2350:
case 874:
case 494:
case 2839:
case 3431:
case 3495:
case 3351:
case 1165:
case 1843:
case 943:
case 1503:
case 2236:
case 3945:
case 935:
case 2745:
case 3127:
case 3929:
case 3512:
case 1043:
case 1207:
case 2252:
case 3666:
case 2039:
case 3566:
case 1222:
case 3800:
case 3393:
case 1384:
case 275:
case 1088:
case 2987:
case 4066:
case 1709:
case 390:
case 3050:
case 3136:
case 1568:
case 4040:
case 3086:
case 10:
case 2623:
case 1553:
case 1668:
case 1473:
case 690:
case 342:
case 1535:
case 1821:
case 1257:
case 3679:
case 2202:
case 1591:
case 1691:
case 3339:
case 1982:
case 3152:
case 270:
case 2851:
case 3459:
case 3886:
case 1635:
case 1731:
case 2381:
case 2006:
case 3738:
case 1702:
case 3356:
case 3698:
case 2757:
case 3436:
case 298:
case 1837:
case 2231:
case 312:
case 4019:
case 1727:
case 3598:
case 1644:
case 3828:
case 3765:
case 3282:
case 2646:
case 3324:
case 3672:
case 2209:
case 3957:
case 2806:
case 2560:
case 378:
case 1308:
case 3332:
case 1187:
case 2546:
case 1004:
case 896:
case 1037:
case 476:
case 3452:
case 2938:
case 2130:
case 1854:
case 3195:
case 3306:
case 2694:
case 4061:
case 1245:
case 1026:
case 2722:
case 1465:
case 1596:
case 2024:
case 1826:
case 3907:
case 2856:
case 3109:
case 1054:
case 2032:
case 2489:
case 2880:
case 2182:
case 3619:
case 1438:
case 3934:
case 3402:
case 2167:
case 4058:
case 572:
case 728:
case 3344:
case 301:
case 745:
case 1680:
case 4063:
case 2896:
case 1411:
case 3133:
case 1632:
case 1524:
case 503:
case 1894:
case 1985:
case 1747:
case 2205:
case 415:
case 3077:
case 196:
case 3769:
case 1532:
case 1624:
case 2554:
case 1469:
case 2976:
case 3942:
case 3447:
case 58:
case 1162:
case 848:
case 1860:
case 2044:
case 1606:
case 8:
case 2383:
case 3910:
case 3492:
case 1116:
case 3658:
case 2797:
case 2604:
case 1225:
case 2485:
case 2114:
case 224:
case 2637:
case 2537:
case 3478:
case 2255:
case 3515:
case 246:
case 1060:
case 461:
case 2742:
case 1923:
case 963:
case 3049:
case 1779:
case 1067:
case 2298:
case 3371:
case 893:
case 3825:
case 2968:
case 473:
case 2790:
case 3316:
case 482:
case 2717:
case 459:
case 953:
case 3791:
case 1403:
case 697:
case 3119:
case 3917:
case 2991:
case 2682:
case 3753:
case 1196:
case 3246:
case 3990:
case 3609:
case 2272:
case 2441:
case 3849:
case 3440:
case 2582:
case 277:
case 1766:
case 4009:
case 1283:
case 95:
case 1144:
case 1673:
case 1814:
case 1573:
case 3198:
case 47:
case 352:
case 2016:
case 1248:
case 389:
case 832:
case 2816:
case 1277:
case 1014:
case 1491:
case 3703:
case 1687:
case 3659:
case 916:
case 609:
case 3870:
case 2862:
case 3559:
case 2160:
case 3172:
case 1941:
case 4031:
case 2219:
case 3479:
case 230:
case 1571:
case 3699:
case 404:
case 1331:
case 741:
case 3739:
case 193:
case 2887:
case 1451:
case 1562:
case 3226:
case 2421:
case 506:
case 605:
case 3045:
case 2073:
case 4018:
case 3420:
case 1671:
case 2208:
case 3029:
case 460:
case 3505:
case 3163:
case 2514:
case 2614:
case 385:
case 3158:
case 2104:
case 2087:
case 1882:
case 1030:
case 2951:
case 3793:
case 1921:
case 2126:
case 3373:
case 600:
case 4005:
case 1124:
case 3475:
case 2443:
case 2215:
case 2329:
case 3555:
case 654:
case 465:
case 364:
case 680:
case 3518:
case 2263:
case 2993:
case 568:
case 3655:
case 3751:
case 2750:
case 447:
case 1830:
case 3108:
case 527:
case 1132:
case 1887:
case 3570:
case 3859:
case 2616:
case 3788:
case 602:
case 1073:
case 2775:
case 2671:
case 2516:
case 2281:
case 382:
case 1514:
case 359:
case 3128:
case 2943:
case 2988:
case 3059:
case 877:
case 1087:
case 1104:
case 369:
case 3224:
case 4049:
case 3382:
case 682:
case 373:
case 2493:
case 3095:
case 143:
case 2030:
case 2156:
case 1567:
case 3400:
case 791:
case 3031:
case 1126:
case 409:
case 903:
case 3625:
case 452:
case 489:
case 983:
case 1215:
case 2720:
case 2359:
case 4070:
case 3984:
case 1488:
case 1750:
case 2132:
case 2228:
case 2830:
case 1154:
case 1786:
case 2082:
case 3831:
case 1263:
case 67:
case 1993:
case 3525:
case 485:
case 723:
case 2067:
case 384:
case 1968:
case 3464:
case 830:
case 611:
case 3183:
case 738:
case 3244:
case 2403:
case 1630:
case 1790:
case 84:
case 3855:
case 3033:
case 588:
case 1935:
case 513:
case 3055:
case 2305:
case 1261:
case 3314:
case 2196:
case 1991:
case 3177:
case 405:
case 177:
case 1441:
case 355:
case 2673:
case 3741:
case 566:
case 2283:
case 347:
case 1062:
case 2766:
case 1903:
case 974:
case 556:
case 2453:
case 655:
case 464:
case 2573:
case 2814:
case 1016:
case 3805:
case 2333:
case 2687:
case 2435:
case 3529:
case 3417:
case 2318:
case 2014:
case 234:
case 1871:
case 3966:
case 1325:
case 1764:
case 1146:
case 742:
case 3149:
case 927:
case 3216:
case 2476:
case 1167:
case 3442:
case 676:
case 958:
case 1896:
case 3497:
case 3819:
case 1526:
case 3262:
case 575:
case 4028:
case 3681:
case 3785:
case 3992:
case 412:
case 2894:
case 2985:
case 2524:
case 296:
case 2372:
case 3346:
case 1554:
case 2532:
case 3978:
case 3125:
case 2361:
case 1205:
case 2846:
case 2506:
case 1044:
case 3872:
case 3170:
case 2162:
case 2171:
case 1233:
case 3861:
case 1976:
case 1911:
case 1383:
case 2606:
case 2249:
case 795:
case 570:
case 124:
case 1485:
case 1604:
case 3528:
case 319:
case 906:
case 3072:
case 1844:
case 619:
case 3628:
case 2046:
case 1742:
case 1537:
case 3061:
case 1757:
case 315:
case 2837:
case 3789:
case 3815:
case 2544:
case 1006:
case 1965:
case 1295:
case 2173:
case 1231:
case 3145:
case 220:
case 1646:
case 401:
case 3129:
case 3422:
case 3063:
case 726:
case 3902:
case 799:
case 3434:
case 1938:
case 2187:
case 3354:
case 310:
case 3273:
case 3936:
case 2413:
case 2245:
case 3808:
case 1832:
case 651:
case 2854:
case 2752:
case 1056:
case 3683:
case 3548:
case 1734:
case 351:
case 2465:
case 2:
case 610:
case 831:
case 707:
case 225:
case 3287:
case 1328:
case 2826:
case 553:
case 2363:
case 2596:
case 787:
case 1182:
case 2696:
case 846:
case 1880:
case 579:
case 2438:
case 1856:
case 3457:
case 2229:
case 2358:
case 1032:
case 2054:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745881201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,];
var gg_b = "1745881201/";

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
