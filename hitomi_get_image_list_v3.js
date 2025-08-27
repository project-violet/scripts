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
case 1036:
case 2295:
case 3846:
case 1287:
case 3195:
case 374:
case 1477:
case 57:
case 3324:
case 3877:
case 1189:
case 3988:
case 3741:
case 3753:
case 3178:
case 2809:
case 3268:
case 2278:
case 1581:
case 1659:
case 2044:
case 3058:
case 3229:
case 431:
case 2129:
case 1945:
case 2090:
case 1587:
case 768:
case 886:
case 1718:
case 2221:
case 2508:
case 128:
case 2775:
case 2595:
case 3747:
case 3801:
case 901:
case 1452:
case 532:
case 286:
case 387:
case 2766:
case 2798:
case 2373:
case 4088:
case 2527:
case 2705:
case 140:
case 3022:
case 561:
case 3750:
case 913:
case 1133:
case 822:
case 715:
case 3706:
case 675:
case 380:
case 196:
case 1359:
case 2670:
case 2449:
case 3660:
case 3037:
case 3998:
case 1020:
case 2466:
case 2950:
case 3286:
case 1865:
case 1418:
case 2511:
case 461:
case 177:
case 3447:
case 2039:
case 851:
case 3655:
case 2119:
case 2965:
case 432:
case 2947:
case 3406:
case 645:
case 1850:
case 3219:
case 3949:
case 1771:
case 1064:
case 2976:
case 2405:
case 3117:
case 170:
case 1225:
case 1769:
case 54:
case 2232:
case 2941:
case 3586:
case 2953:
case 1023:
case 4049:
case 2673:
case 769:
case 344:
case 1777:
case 92:
case 1597:
case 2734:
case 294:
case 3031:
case 2603:
case 3441:
case 3012:
case 1525:
case 562:
case 894:
case 2642:
case 783:
case 2788:
case 1291:
case 1707:
case 311:
case 1731:
case 2240:
case 1458:
case 3325:
case 2009:
case 2936:
case 2551:
case 3354:
case 3007:
case 3687:
case 2910:
case 2890:
case 3858:
case 1319:
case 1712:
case 2502:
case 1944:
case 3410:
case 2257:
case 1836:
case 173:
case 2435:
case 1629:
case 3077:
case 641:
case 3259:
case 1990:
case 2630:
case 2399:
case 2792:
case 2159:
case 3562:
case 446:
case 855:
case 1386:
case 2251:
case 3151:
case 88:
case 3391:
case 787:
case 3764:
case 1422:
case 2893:
case 3102:
case 315:
case 2557:
case 3720:
case 2272:
case 206:
case 307:
case 712:
case 3559:
case 2633:
case 1813:
case 2316:
case 1329:
case 1722:
case 2474:
case 3464:
case 3184:
case 1686:
case 1864:
case 1006:
case 1170:
case 2330:
case 1260:
case 2238:
case 2648:
case 2782:
case 2404:
case 1047:
case 1156:
case 3837:
case 3018:
case 1820:
case 1100:
case 1619:
case 1076:
case 2839:
case 3420:
case 1437:
case 3713:
case 518:
case 2584:
case 4074:
case 1053:
case 905:
case 1041:
case 1412:
case 546:
case 369:
case 1263:
case 2333:
case 2538:
case 1560:
case 590:
case 998:
case 104:
case 2492:
case 3710:
case 2735:
case 338:
case 910:
case 46:
case 1814:
case 3347:
case 2634:
case 1513:
case 2703:
case 1210:
case 3376:
case 1236:
case 3414:
case 2857:
case 2742:
case 1459:
case 2688:
case 1087:
case 1669:
case 3350:
case 3029:
case 25:
case 1646:
case 2158:
case 2398:
case 2773:
case 3763:
case 3144:
case 442:
case 1015:
case 85:
case 2244:
case 3068:
case 2078:
case 2027:
case 1213:
case 334:
case 3755:
case 2700:
case 1182:
case 720:
case 285:
case 1671:
case 1943:
case 1536:
case 994:
case 1951:
case 53:
case 2770:
case 3760:
case 1652:
case 31:
case 2293:
case 1972:
case 1081:
case 727:
case 195:
case 2544:
case 1601:
case 82:
case 676:
case 2122:
case 167:
case 2851:
case 2843:
case 202:
case 3222:
case 2698:
case 4042:
case 3970:
case 414:
case 3424:
case 2085:
case 571:
case 3650:
case 1762:
case 1369:
case 1220:
case 2400:
case 1328:
case 3606:
case 665:
case 353:
case 2137:
case 1860:
case 778:
case 2955:
case 1618:
case 1174:
case 1025:
case 2334:
case 3512:
case 3665:
case 3647:
case 618:
case 1307:
case 3531:
case 2388:
case 2649:
case 1054:
case 4073:
case 2470:
case 2924:
case 3180:
case 2666:
case 3714:
case 2539:
case 109:
case 813:
case 2963:
case 1352:
case 2442:
case 2032:
case 137:
case 213:
case 3537:
case 1520:
case 1301:
case 1091:
case 1863:
case 3903:
case 986:
case 749:
case 2131:
case 1371:
case 2473:
case 3463:
case 2283:
case 3791:
case 3571:
case 2561:
case 4033:
case 1468:
case 3636:
case 466:
case 3989:
case 350:
case 1188:
case 3109:
case 3610:
case 1908:
case 2878:
case 2635:
case 3364:
case 2040:
case 3487:
case 3320:
case 3059:
case 693:
case 3228:
case 3277:
case 2245:
case 3896:
case 2128:
case 379:
case 357:
case 3167:
case 856:
case 3930:
case 1978:
case 2169:
case 3179:
case 3246:
case 2489:
case 2279:
case 2146:
case 2748:
case 3161:
case 2002:
case 3725:
case 3507:
case 882:
case 3271:
case 4030:
case 2043:
case 298:
case 536:
case 810:
case 1881:
case 3754:
case 1921:
case 348:
case 1622:
case 133:
case 226:
case 2101:
case 3062:
case 2072:
case 316:
case 2567:
case 3577:
case 71:
case 2579:
case 2152:
case 826:
case 3933:
case 2981:
case 1825:
case 1206:
case 2426:
case 3454:
case 2038:
case 1637:
case 3819:
case 955:
case 2733:
case 1105:
case 1854:
case 1149:
case 436:
case 3948:
case 3336:
case 1166:
case 631:
case 64:
case 1917:
case 2674:
case 1024:
case 154:
case 3623:
case 3:
case 1891:
case 545:
case 1063:
case 723:
case 906:
case 299:
case 281:
case 163:
case 3491:
case 881:
case 1768:
case 4048:
case 1550:
case 1253:
case 1932:
case 475:
case 2991:
case 1796:
case 191:
case 2382:
case 124:
case 3313:
case 764:
case 1547:
case 3817:
case 1344:
case 430:
case 1298:
case 1417:
case 69:
case 1150:
case 1390:
case 3733:
case 3448:
case 2425:
case 172:
case 1000:
case 1680:
case 1176:
case 1249:
case 878:
case 437:
case 2336:
case 3885:
case 3499:
case 2310:
case 1056:
case 1165:
case 1147:
case 1721:
case 278:
case 409:
case 3118:
case 381:
case 4054:
case 2623:
case 141:
case 4025:
case 1727:
case 1141:
case 1153:
case 1598:
case 1393:
case 3789:
case 1432:
case 3811:
case 1683:
case 968:
case 567:
case 1575:
case 3832:
case 114:
case 595:
case 1411:
case 2313:
case 1708:
case 1996:
case 3094:
case 2636:
case 467:
case 3107:
case 250:
case 1288:
case 1427:
case 3430:
case 2364:
case 3209:
case 1234:
case 850:
case 3827:
case 643:
case 2109:
case 3128:
case 2167:
case 356:
case 279:
case 2145:
case 1889:
case 257:
case 460:
case 3177:
case 2896:
case 1711:
case 2501:
case 2228:
case 2059:
case 1408:
case 3245:
case 3279:
case 3146:
case 3895:
case 3915:
case 2179:
case 3169:
case 1690:
case 2246:
case 857:
case 3808:
case 75:
case 1383:
case 938:
case 2481:
case 2507:
case 310:
case 1717:
case 220:
case 3171:
case 2725:
case 2161:
case 2754:
case 2613:
case 3043:
case 317:
case 2797:
case 216:
case 4087:
case 2201:
case 326:
case 2062:
case 3981:
case 305:
case 2252:
case 969:
case 1693:
case 3821:
case 3579:
case 16:
case 530:
case 816:
case 1592:
case 3239:
case 3085:
case 1204:
case 853:
case 2970:
case 640:
case 3456:
case 2139:
case 3698:
case 491:
case 1120:
case 3137:
case 1367:
case 2455:
case 1856:
case 2647:
case 3675:
case 1274:
case 1702:
case 3334:
case 1048:
case 1870:
case 3838:
case 647:
case 463:
case 1743:
case 1026:
case 2180:
case 3924:
case 3388:
case 2531:
case 3649:
case 3011:
case 823:
case 3963:
case 2973:
case 1803:
case 454:
case 2653:
case 1504:
case 2641:
case 781:
case 3403:
case 313:
case 1123:
case 136:
case 3032:
case 2903:
case 987:
case 264:
case 1574:
case 1794:
case 301:
case 533:
case 4060:
case 1740:
case 2183:
case 588:
case 592:
case 3703:
case 488:
case 1457:
case 492:
case 2347:
case 3375:
case 2365:
case 3349:
case 3688:
case 1582:
case 2376:
case 3366:
case 3158:
case 2763:
case 3398:
case 1016:
case 2258:
case 3914:
case 2190:
case 1440:
case 2350:
case 629:
case 2068:
case 756:
case 1667:
case 2522:
case 2306:
case 1535:
case 798:
case 3700:
case 782:
case 2724:
case 834:
case 4014:
case 1472:
case 670:
case 589:
case 944:
case 1443:
case 3293:
case 21:
case 1784:
case 2222:
case 166:
case 717:
case 3843:
case 81:
case 3851:
case 3122:
case 903:
case 726:
case 524:
case 3544:
case 633:
case 3880:
case 1937:
case 1098:
case 3920:
case 2184:
case 3316:
case 1005:
case 1270:
case 957:
case 1378:
case 688:
case 3699:
case 1874:
case 2837:
case 1542:
case 2018:
case 1617:
case 1075:
case 3782:
case 1439:
case 429:
case 2625:
case 3389:
case 2713:
case 2654:
case 950:
case 1395:
case 3964:
case 1804:
case 2974:
case 3839:
case 3626:
case 547:
case 470:
case 269:
case 528:
case 4064:
case 193:
case 1611:
case 3923:
case 2831:
case 2992:
case 2812:
case 132:
case 916:
case 2381:
case 3333:
case 1483:
case 948:
case 1273:
case 283:
case 3492:
case 459:
case 838:
case 1556:
case 1242:
case 721:
case 794:
case 596:
case 1912:
case 238:
case 2710:
case 1500:
case 3936:
case 3009:
case 3543:
case 3348:
case 1317:
case 1490:
case 1783:
case 3326:
case 2935:
case 440:
case 2858:
case 2687:
case 1608:
case 1385:
case 3257:
case 4013:
case 2046:
case 2397:
case 663:
case 570:
case 447:
case 2615:
case 3399:
case 2562:
case 3792:
case 3572:
case 1678:
case 3630:
case 2077:
case 3045:
case 2028:
case 584:
case 2143:
case 1493:
case 2151:
case 786:
case 868:
case 131:
case 3251:
case 2982:
case 3061:
case 2102:
case 3913:
case 268:
case 3202:
case 654:
case 38:
case 2413:
case 4010:
case 2052:
case 1311:
case 215:
case 3557:
case 815:
case 722:
case 2172:
case 2681:
case 1739:
case 3704:
case 1332:
case 4036:
case 3272:
case 458:
case 306:
case 2286:
case 2905:
case 3532:
case 2476:
case 443:
case 1299:
case 2037:
case 2818:
case 2660:
case 1638:
case 3670:
case 3285:
case 3039:
case 3475:
case 2447:
case 2465:
case 1357:
case 2185:
case 2219:
case 1154:
case 2975:
case 3080:
case 3600:
case 3119:
case 1248:
case 3405:
case 2624:
case 1074:
case 2450:
case 4041:
case 3976:
case 2966:
case 3217:
case 1761:
case 608:
case 660:
case 3656:
case 2132:
case 2663:
case 3673:
case 2586:
case 1599:
case 135:
case 3211:
case 803:
case 1745:
case 119:
case 244:
case 4065:
case 3585:
case 2111:
case 3083:
case 3734:
case 4006:
case 211:
case 3788:
case 2453:
case 1191:
case 2441:
case 59:
case 1351:
case 934:
case 1548:
case 321:
case 2355:
case 1445:
case 274:
case 3521:
case 49:
case 1694:
case 2108:
case 2934:
case 1187:
case 2988:
case 3356:
case 2877:
case 3845:
case 1479:
case 1289:
case 1035:
case 2324:
case 1338:
case 3488:
case 3227:
case 1115:
case 2268:
case 1834:
case 1969:
case 3809:
case 2741:
case 2178:
case 3168:
case 1977:
case 3090:
case 1928:
case 1888:
case 1409:
case 1384:
case 2229:
case 3434:
case 2121:
case 2765:
case 3303:
case 887:
case 2852:
case 2776:
case 1589:
case 287:
case 386:
case 3342:
case 2801:
case 2750:
case 2022:
case 3705:
case 322:
case 1952:
case 1233:
case 923:
case 2568:
case 2363:
case 3373:
case 1530:
case 3578:
case 3527:
case 812:
case 197:
case 543:
case 2529:
case 3861:
case 165:
case 3093:
case 1821:
case 2786:
case 1799:
case 1579:
case 1392:
case 888:
case 1567:
case 233:
case 1072:
case 126:
case 2881:
case 3833:
case 2921:
case 2719:
case 198:
case 1509:
case 1726:
case 1043:
case 1261:
case 1433:
case 4068:
case 943:
case 2331:
case 3383:
case 342:
case 1002:
case 3339:
case 1895:
case 1304:
case 1489:
case 2496:
case 1057:
case 434:
case 2927:
case 2978:
case 1808:
case 3968:
case 2887:
case 2014:
case 3889:
case 1128:
case 669:
case 2337:
case 1245:
case 1267:
case 3408:
case 3644:
case 553:
case 1209:
case 1635:
case 1374:
case 2815:
case 2995:
case 1827:
case 1878:
case 1107:
case 371:
case 1094:
case 3996:
case 1430:
case 2468:
case 3380:
case 3288:
case 2565:
case 2547:
case 1832:
case 3575:
case 2612:
case 889:
case 3708:
case 224:
case 3411:
case 3432:
case 824:
case 1789:
case 2631:
case 3683:
case 3003:
case 1811:
case 1991:
case 1692:
case 2932:
case 3505:
case 33:
case 2253:
case 2241:
case 863:
case 3393:
case 1730:
case 3598:
case 2768:
case 3153:
case 3141:
case 4019:
case 199:
case 1716:
case 2322:
case 736:
case 99:
case 534:
case 2063:
case 3073:
case 3721:
case 3056:
case 3165:
case 1674:
case 3275:
case 2265:
case 2024:
case 3485:
case 3899:
case 2055:
case 1885:
case 2149:
case 3266:
case 854:
case 2486:
case 1733:
case 973:
case 2854:
case 3417:
case 2105:
case 607:
case 372:
case 2541:
case 3639:
case 1448:
case 1084:
case 2198:
case 3344:
case 1817:
case 1997:
case 3070:
case 639:
case 3106:
case 3848:
case 2825:
case 2985:
case 1851:
case 1843:
case 450:
case 2081:
case 295:
case 1122:
case 1802:
case 2972:
case 3443:
case 1590:
case 2652:
case 867:
case 929:
case 3472:
case 2462:
case 208:
case 2943:
case 2951:
case 2536:
case 3282:
case 260:
case 1756:
case 185:
case 2182:
case 3113:
case 2902:
case 860:
case 808:
case 5:
case 1700:
case 3645:
case 2628:
case 1244:
case 3030:
case 1078:
case 420:
case 1840:
case 2015:
case 578:
case 2646:
case 1290:
case 3440:
case 2669:
case 1305:
case 1914:
case 3016:
case 1742:
case 1688:
case 1008:
case 2607:
case 771:
case 416:
case 1095:
case 611:
case 427:
case 1857:
case 970:
case 2318:
case 2994:
case 2814:
case 1375:
case 1634:
case 3235:
case 1473:
case 947:
case 3361:
case 1283:
case 928:
case 230:
case 3740:
case 2863:
case 516:
case 674:
case 101:
case 548:
case 3794:
case 3574:
case 2564:
case 2520:
case 809:
case 113:
case 940:
case 2223:
case 237:
case 336:
case 3757:
case 3123:
case 73:
case 3803:
case 996:
case 1442:
case 2192:
case 2759:
case 520:
case 3504:
case 1884:
case 1280:
case 4:
case 2307:
case 3438:
case 1649:
case 958:
case 687:
case 1388:
case 3309:
case 3048:
case 3484:
case 1334:
case 3702:
case 2264:
case 3274:
case 1675:
case 1017:
case 2860:
case 1838:
case 3870:
case 2174:
case 1955:
case 1137:
case 3099:
case 2220:
case 3856:
case 2523:
case 2328:
case 375:
case 3345:
case 3204:
case 550:
case 449:
case 1239:
case 3772:
case 3592:
case 612:
case 2104:
case 772:
case 2938:
case 2346:
case 1633:
case 2993:
case 511:
case 474:
case 106:
case 1272:
case 3332:
case 362:
case 29:
case 1704:
case 3739:
case 1482:
case 125:
case 3311:
case 89:
case 2737:
case 544:
case 991:
case 989:
case 678:
case 1893:
case 746:
case 1061:
case 1774:
case 1202:
case 3780:
case 790:
case 3493:
case 4058:
case 503:
case 1572:
case 1792:
case 3835:
case 2386:
case 3958:
case 2214:
case 2810:
case 1067:
case 1630:
case 2668:
case 3627:
case 1079:
case 487:
case 6:
case 1435:
case 1294:
case 2319:
case 3444:
case 2696:
case 1240:
case 1543:
case 1009:
case 1551:
case 1936:
case 2458:
case 1689:
case 480:
case 3034:
case 2731:
case 3317:
case 804:
case 243:
case 1735:
case 580:
case 3203:
case 4037:
case 2555:
case 2524:
case 1492:
case 2142:
case 512:
case 2823:
case 3242:
case 650:
case 204:
case 3163:
case 2173:
case 587:
case 332:
case 2758:
case 2263:
case 3483:
case 3790:
case 933:
case 2560:
case 1883:
case 988:
case 992:
case 3744:
case 3611:
case 2437:
case 2255:
case 3503:
case 2076:
case 3617:
case 3124:
case 444:
case 2980:
case 3256:
case 3542:
case 1389:
case 1404:
case 1648:
case 1782:
case 2047:
case 3075:
case 2156:
case 2065:
case 2396:
case 3573:
case 3378:
case 2260:
case 1238:
case 2939:
case 2006:
case 2686:
case 2864:
case 2170:
case 1920:
case 627:
case 574:
case 648:
case 1880:
case 411:
case 616:
case 1284:
case 2329:
case 3685:
case 1316:
case 4012:
case 10:
case 538:
case 397:
case 296:
case 909:
case 1093:
case 365:
case 1861:
case 2471:
case 3461:
case 1527:
case 3530:
case 4007:
case 3233:
case 3952:
case 3589:
case 3651:
case 847:
case 731:
case 1775:
case 318:
case 2401:
case 1221:
case 1508:
case 2718:
case 1303:
case 3888:
case 2945:
case 1434:
case 3384:
case 3409:
case 1227:
case 4071:
case 1488:
case 2659:
case 1370:
case 3946:
case 1168:
case 2215:
case 468:
case 2979:
case 3834:
case 2189:
case 1845:
case 1867:
case 1196:
case 2446:
case 858:
case 1356:
case 3035:
case 439:
case 415:
case 3479:
case 4001:
case 1300:
case 3467:
case 1521:
case 3445:
case 0:
case 258:
case 1879:
case 664:
case 407:
case 1295:
case 3694:
case 1642:
case 1788:
case 1517:
case 761:
case 507:
case 3548:
case 121:
case 3351:
case 2525:
case 1083:
case 908:
case 515:
case 539:
case 3526:
case 3709:
case 3745:
case 2728:
case 335:
case 793:
case 4018:
case 884:
case 568:
case 2746:
case 1673:
case 967:
case 732:
case 829:
case 284:
case 3372:
case 2362:
case 3599:
case 995:
case 1953:
case 2806:
case 1976:
case 2064:
case 2225:
case 270:
case 469:
case 151:
case 3248:
case 3125:
case 2591:
case 634:
case 870:
case 3918:
case 1119:
case 277:
case 259:
case 1475:
case 1906:
case 483:
case 1511:
case 61:
case 1950:
case 3299:
case 1532:
case 3875:
case 2865:
case 1449:
case 1670:
case 2752:
case 2020:
case 877:
case 859:
case 1186:
case 77:
case 2351:
case 2343:
case 2548:
case 1012:
case 506:
case 111:
case 3291:
case 1519:
case 525:
case 2092:
case 1111:
case 2745:
case 3777:
case 3728:
case 1586:
case 3362:
case 2779:
case 3746:
case 3023:
case 65:
case 3591:
case 3148:
case 3225:
case 370:
case 1624:
case 3806:
case 685:
case 555:
case 3254:
case 2226:
case 2805:
case 1185:
case 3701:
case 3297:
case 2684:
case 2357:
case 276:
case 377:
case 2197:
case 359:
case 1998:
case 1037:
case 1660:
case 2638:
case 3359:
case 3865:
case 2299:
case 265:
case 2901:
case 297:
case 180:
case 4009:
case 2952:
case 79:
case 112:
case 1363:
case 1022:
case 3515:
case 3013:
case 455:
case 2971:
case 1776:
case 187:
case 2589:
case 2651:
case 2643:
case 3401:
case 4067:
case 3587:
case 218:
case 2082:
case 2602:
case 328:
case 2928:
case 2977:
case 3967:
case 3116:
case 2969:
case 3979:
case 3215:
case 1178:
case 3659:
case 1360:
case 3581:
case 2115:
case 3407:
case 1296:
case 3469:
case 2479:
case 2035:
case 3446:
case 3010:
case 3189:
case 2907:
case 2694:
case 358:
case 2187:
case 3909:
case 1869:
case 406:
case 2445:
case 3477:
case 601:
case 1355:
case 3428:
case 942:
case 3555:
case 2500:
case 1710:
case 138:
case 2912:
case 343:
case 2242:
case 2931:
case 2556:
case 3823:
case 183:
case 261:
case 522:
case 2483:
case 4080:
case 3431:
case 893:
case 1381:
case 3758:
case 2632:
case 232:
case 729:
case 96:
case 2611:
case 656:
case 451:
case 2066:
case 2155:
case 3100:
case 3255:
case 2049:
case 698:
case 1654:
case 2503:
case 1713:
case 3156:
case 3047:
case 2075:
case 3396:
case 1625:
case 3224:
case 552:
case 2256:
case 1018:
case 770:
case 2617:
case 1138:
case 2160:
case 3006:
case 3939:
case 1904:
case 2874:
case 3864:
case 2270:
case 2480:
case 2573:
case 2378:
case 3050:
case 617:
case 3329:
case 87:
case 2098:
case 1184:
case 2937:
case 39:
case 2739:
case 107:
case 1262:
case 3993:
case 1681:
case 139:
case 1720:
case 2311:
case 594:
case 1052:
case 3422:
case 100:
case 168:
case 452:
case 1071:
case 4044:
case 1102:
case 24:
case 1822:
case 1143:
case 4090:
case 2627:
case 2114:
case 1028:
case 3810:
case 3386:
case 551:
case 1562:
case 681:
case 699:
case 3944:
case 3629:
case 2385:
case 373:
case 1069:
case 758:
case 1687:
case 1354:
case 2088:
case 2444:
case 1935:
case 1858:
case 3731:
case 1140:
case 2490:
case 3696:
case 40:
case 918:
case 1183:
case 2740:
case 1942:
case 505:
case 1463:
case 789:
case 724:
case 4084:
case 526:
case 2574:
case 1903:
case 517:
case 2873:
case 990:
case 337:
case 123:
case 2842:
case 763:
case 309:
case 2504:
case 965:
case 652:
case 3352:
case 997:
case 836:
case 510:
case 1460:
case 2438:
case 1531:
case 686:
case 1956:
case 3307:
case 1676:
case 481:
case 499:
case 1180:
case 1019:
case 2743:
case 2026:
case 3174:
case 2164:
case 1900:
case 3860:
case 556:
case 2274:
case 1647:
case 754:
case 1665:
case 2309:
case 2048:
case 1512:
case 3025:
case 3523:
case 3377:
case 60:
case 2367:
case 3220:
case 1086:
case 153:
case 3984:
case 1606:
case 3097:
case 3346:
case 1970:
case 3938:
case 3104:
case 1139:
case 3855:
case 1650:
case 2204:
case 1424:
case 733:
case 3601:
case 3081:
case 1222:
case 2784:
case 2402:
case 4094:
case 792:
case 1760:
case 788:
case 1558:
case 2451:
case 1193:
case 4040:
case 919:
case 2443:
case 2661:
case 3671:
case 3182:
case 651:
case 3536:
case 3943:
case 360:
case 845:
case 456:
case 2282:
case 1724:
case 3510:
case 134:
case 1862:
case 2113:
case 581:
case 599:
case 3015:
case 3957:
case 2494:
case 410:
case 3677:
case 2645:
case 482:
case 2016:
case 1190:
case 2440:
case 976:
case 2959:
case 3236:
case 1376:
case 3087:
case 3459:
case 621:
case 694:
case 2609:
case 2110:
case 3994:
case 3814:
case 1096:
case 2457:
case 405:
case 3135:
case 1518:
case 931:
case 94:
case 3547:
case 214:
case 4085:
case 2683:
case 2549:
case 391:
case 389:
case 52:
case 3768:
case 2393:
case 2778:
case 2598:
case 2141:
case 2727:
case 1491:
case 241:
case 3932:
case 1715:
case 3241:
case 3253:
case 3550:
case 3891:
case 1:
case 962:
case 3506:
case 3729:
case 363:
case 2919:
case 178:
case 1926:
case 3265:
case 3247:
case 4011:
case 68:
case 1497:
case 2056:
case 2165:
case 2721:
case 3175:
case 354:
case 1218:
case 2147:
case 55:
case 1948:
case 4032:
case 2680:
case 3897:
case 2249:
case 413:
case 2176:
case 1425:
case 3358:
case 3541:
case 2986:
case 2205:
case 401:
case 1999:
case 3250:
case 2826:
case 3105:
case 2417:
case 1781:
case 2390:
case 2150:
case 3985:
case 3206:
case 625:
case 2848:
case 3825:
case 3637:
case 2106:
case 2070:
case 1569:
case 388:
case 392:
case 1546:
case 127:
case 4095:
case 501:
case 1528:
case 1201:
case 86:
case 1797:
case 767:
case 116:
case 4008:
case 3719:
case 842:
case 961:
case 3881:
case 242:
case 120:
case 4078:
case 2588:
case 2383:
case 1271:
case 1507:
case 3887:
case 2968:
case 3978:
case 3496:
case 2339:
case 3658:
case 2732:
case 485:
case 1277:
case 97:
case 2644:
case 1487:
case 1167:
case 157:
case 179:
case 1145:
case 1896:
case 2929:
case 2830:
case 871:
case 42:
case 3995:
case 1364:
case 2234:
case 3468:
case 2478:
case 2427:
case 2996:
case 2816:
case 1829:
case 150:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756335601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,];
var gg_b = "1756335601/";

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
