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
case 181:
case 2660:
case 2390:
case 2929:
case 2602:
case 3485:
case 763:
case 2492:
case 1721:
case 1127:
case 1604:
case 2150:
case 1237:
case 1494:
case 472:
case 3505:
case 3793:
case 3299:
case 3900:
case 3151:
case 3962:
case 1764:
case 3456:
case 668:
case 2895:
case 1074:
case 2700:
case 2993:
case 1159:
case 409:
case 2585:
case 2383:
case 584:
case 3718:
case 3981:
case 1869:
case 2272:
case 688:
case 2017:
case 3682:
case 3861:
case 2695:
case 2781:
case 2405:
case 245:
case 857:
case 1091:
case 3374:
case 2556:
case 3780:
case 2545:
case 161:
case 447:
case 2860:
case 2343:
case 684:
case 6:
case 1949:
case 3824:
case 3642:
case 1037:
case 3023:
case 2741:
case 2980:
case 123:
case 112:
case 310:
case 3441:
case 2500:
case 2069:
case 497:
case 701:
case 1672:
case 3979:
case 3146:
case 3155:
case 3683:
case 1817:
case 1438:
case 546:
case 90:
case 2480:
case 530:
case 1295:
case 842:
case 2891:
case 522:
case 3665:
case 2382:
case 1168:
case 826:
case 1449:
case 3593:
case 1344:
case 3481:
case 3705:
case 221:
case 1725:
case 579:
case 3022:
case 1509:
case 3643:
case 75:
case 3890:
case 3501:
case 2440:
case 2004:
case 2803:
case 3016:
case 2418:
case 646:
case 1489:
case 3956:
case 1260:
case 1322:
case 3945:
case 3044:
case 1420:
case 2457:
case 3360:
case 1475:
case 2756:
case 3580:
case 2745:
case 3985:
case 25:
case 2581:
case 1872:
case 3084:
case 2763:
case 3883:
case 1858:
case 3114:
case 2874:
case 92:
case 2361:
case 3865:
case 806:
case 3518:
case 2691:
case 1994:
case 795:
case 2401:
case 4031:
case 3855:
case 805:
case 4045:
case 796:
case 972:
case 4056:
case 2797:
case 1988:
case 3953:
case 2930:
case 3730:
case 1313:
case 2753:
case 2191:
case 1515:
case 2259:
case 1868:
case 2606:
case 471:
case 1117:
case 3213:
case 3886:
case 2731:
case 137:
case 327:
case 1910:
case 1948:
case 2535:
case 2467:
case 4063:
case 2103:
case 3966:
case 3478:
case 1250:
case 2137:
case 683:
case 67:
case 3728:
case 3347:
case 663:
case 2027:
case 1287:
case 3655:
case 3183:
case 1172:
case 545:
case 349:
case 3387:
case 162:
case 2059:
case 2552:
case 1668:
case 3013:
case 3567:
case 2174:
case 40:
case 702:
case 399:
case 2647:
case 2386:
case 111:
case 4081:
case 108:
case 2566:
case 3034:
case 1827:
case 3807:
case 3519:
case 2687:
case 1715:
case 695:
case 4041:
case 3530:
case 1859:
case 104:
case 1377:
case 2597:
case 3277:
case 3026:
case 3182:
case 1511:
case 621:
case 3212:
case 3767:
case 1448:
case 3651:
case 2778:
case 514:
case 1312:
case 779:
case 3306:
case 124:
case 3952:
case 1659:
case 3431:
case 3466:
case 55:
case 2068:
case 601:
case 2967:
case 334:
case 2430:
case 713:
case 2102:
case 2419:
case 4062:
case 730:
case 3497:
case 1876:
case 3607:
case 65:
case 3633:
case 1104:
case 2650:
case 392:
case 190:
case 1853:
case 709:
case 1946:
case 964:
case 1955:
case 3067:
case 3513:
case 3476:
case 3968:
case 2559:
case 272:
case 357:
case 4072:
case 571:
case 483:
case 1986:
case 3839:
case 1550:
case 1866:
case 2608:
case 3096:
case 89:
case 3648:
case 178:
case 1547:
case 209:
case 3734:
case 3639:
case 1932:
case 988:
case 463:
case 3459:
case 445:
case 772:
case 996:
case 2934:
case 2576:
case 1396:
case 3296:
case 4017:
case 2413:
case 2035:
case 1185:
case 729:
case 2912:
case 1706:
case 1587:
case 855:
case 247:
case 2611:
case 1914:
case 3712:
case 1163:
case 1367:
case 1697:
case 3427:
case 1433:
case 1407:
case 2278:
case 979:
case 4069:
case 2412:
case 2109:
case 2348:
case 2727:
case 2310:
case 1750:
case 60:
case 3927:
case 2266:
case 2231:
case 2426:
case 3028:
case 1835:
case 551:
case 377:
case 252:
case 1432:
case 3120:
case 3230:
case 2654:
case 3713:
case 1330:
case 3219:
case 913:
case 1211:
case 2434:
case 2815:
case 11:
case 3019:
case 2998:
case 1011:
case 875:
case 902:
case 1506:
case 2097:
case 326:
case 2776:
case 140:
case 1328:
case 414:
case 2031:
case 833:
case 3228:
case 4073:
case 2477:
case 1208:
case 672:
case 2944:
case 2056:
case 1483:
case 1270:
case 2045:
case 1135:
case 3638:
case 860:
case 3744:
case 1465:
case 1537:
case 3523:
case 1305:
case 464:
case 1795:
case 2773:
case 2984:
case 3820:
case 876:
case 2085:
case 1443:
case 572:
case 3599:
case 4076:
case 807:
case 629:
case 1591:
case 2371:
case 3875:
case 2063:
case 2517:
case 1982:
case 3689:
case 97:
case 1392:
case 496:
case 1600:
case 18:
case 2154:
case 2285:
case 827:
case 609:
case 2423:
case 3675:
case 547:
case 488:
case 963:
case 1936:
case 3889:
case 2394:
case 2499:
case 2704:
case 2609:
case 3716:
case 1841:
case 2245:
case 1070:
case 3005:
case 880:
case 647:
case 509:
case 305:
case 4059:
case 2621:
case 3849:
case 3904:
case 1357:
case 2081:
case 1879:
case 153:
case 2422:
case 2200:
case 2999:
case 1153:
case 1424:
case 3404:
case 3694:
case 2416:
case 3364:
case 856:
case 1197:
case 1663:
case 697:
case 1595:
case 3871:
case 3917:
case 413:
case 3544:
case 1703:
case 3723:
case 834:
case 1645:
case 1656:
case 1436:
case 1301:
case 1166:
case 1221:
case 2241:
case 70:
case 1502:
case 1009:
case 1560:
case 2670:
case 1856:
case 1845:
case 2349:
case 2625:
case 2338:
case 3516:
case 1380:
case 3001:
case 1021:
case 2281:
case 914:
case 2000:
case 22:
case 3218:
case 2389:
case 3240:
case 3894:
case 1340:
case 2772:
case 1863:
case 1064:
case 899:
case 2983:
case 1281:
case 2679:
case 1062:
case 3765:
case 1000:
case 554:
case 3381:
case 669:
case 636:
case 2442:
case 3075:
case 640:
case 51:
case 3289:
case 2863:
case 903:
case 3561:
case 2318:
case 3974:
case 1241:
case 654:
case 753:
case 343:
case 2560:
case 2856:
case 3341:
case 2845:
case 820:
case 1108:
case 1625:
case 3238:
case 3128:
case 3605:
case 2380:
case 536:
case 61:
case 3524:
case 3743:
case 2209:
case 2737:
case 1870:
case 2645:
case 4006:
case 2436:
case 1825:
case 589:
case 2166:
case 3937:
case 1923:
case 3049:
case 3790:
case 2357:
case 1262:
case 1081:
case 3119:
case 2879:
case 411:
case 10:
case 253:
case 1422:
case 3220:
case 2153:
case 1999:
case 689:
case 3275:
case 3991:
case 1573:
case 2393:
case 2264:
case 912:
case 1375:
case 2595:
case 408:
case 3582:
case 3089:
case 1111:
case 3724:
case 1704:
case 1499:
case 1922:
case 3960:
case 2702:
case 1916:
case 1621:
case 773:
case 3583:
case 3761:
case 1558:
case 1572:
case 2881:
case 2600:
case 1154:
case 1285:
case 719:
case 3840:
case 2152:
case 3363:
case 3403:
case 2178:
case 1423:
case 3437:
case 574:
case 3818:
case 735:
case 3167:
case 2961:
case 2936:
case 3782:
case 2795:
case 1984:
case 2681:
case 3857:
case 393:
case 590:
case 1115:
case 3271:
case 1864:
case 78:
case 3742:
case 3590:
case 3829:
case 1809:
case 1045:
case 171:
case 235:
case 3680:
case 2135:
case 3474:
case 2503:
case 2465:
case 3801:
case 1821:
case 2942:
case 2446:
case 3048:
case 3947:
case 236:
case 269:
case 3532:
case 403:
case 3039:
case 258:
case 1477:
case 3896:
case 3180:
case 2635:
case 3088:
case 2486:
case 2181:
case 3987:
case 1998:
case 831:
case 2011:
case 2787:
case 1615:
case 254:
case 152:
case 2319:
case 4002:
case 1253:
case 740:
case 3288:
case 3353:
case 2330:
case 3546:
case 904:
case 1164:
case 3397:
case 1434:
case 2678:
case 1815:
case 3751:
case 3193:
case 2652:
case 1297:
case 1412:
case 3129:
case 3239:
case 1109:
case 1348:
case 423:
case 71:
case 3733:
case 2750:
case 1310:
case 3707:
case 754:
case 2907:
case 344:
case 2008:
case 3366:
case 3696:
case 2414:
case 2835:
case 2185:
case 3630:
case 2653:
case 3192:
case 2254:
case 274:
case 461:
case 1912:
case 2587:
case 147:
case 1611:
case 2914:
case 962:
case 2163:
case 3906:
case 3352:
case 2697:
case 394:
case 2015:
case 58:
case 2433:
case 4037:
case 3450:
case 1278:
case 4003:
case 2145:
case 278:
case 109:
case 790:
case 2396:
case 1413:
case 3828:
case 1035:
case 366:
case 129:
case 2986:
case 673:
case 2550:
case 66:
case 3507:
case 3786:
case 2831:
case 315:
case 4074:
case 3105:
case 1235:
case 1608:
case 937:
case 290:
case 2853:
case 573:
case 3447:
case 635:
case 2946:
case 3746:
case 1811:
case 1078:
case 56:
case 1559:
case 2215:
case 1052:
case 2488:
case 1102:
case 1847:
case 3232:
case 3122:
case 1419:
case 367:
case 228:
case 936:
case 2334:
case 2508:
case 4064:
case 1650:
case 603:
case 3046:
case 885:
case 711:
case 2410:
case 1887:
case 3954:
case 300:
case 224:
case 503:
case 1314:
case 1967:
case 3898:
case 2206:
case 708:
case 91:
case 3255:
case 130:
case 3184:
case 1346:
case 122:
case 113:
case 2715:
case 1268:
case 2859:
case 512:
case 204:
case 2377:
case 1597:
case 3408:
case 1428:
case 843:
case 3014:
case 3368:
case 3698:
case 453:
case 3539:
case 3144:
case 989:
case 208:
case 612:
case 1566:
case 179:
case 2827:
case 2287:
case 2158:
case 3051:
case 262:
case 1059:
case 2398:
case 2668:
case 3826:
case 1806:
case 4025:
case 1174:
case 974:
case 48:
case 2708:
case 196:
case 561:
case 3376:
case 188:
case 3834:
case 3415:
case 978:
case 1027:
case 3033:
case 46:
case 1731:
case 3454:
case 1766:
case 2910:
case 1535:
case 1467:
case 168:
case 1333:
case 3327:
case 1307:
case 1103:
case 3207:
case 2250:
case 473:
case 3739:
case 1351:
case 2087:
case 2988:
case 282:
case 3199:
case 1930:
case 1753:
case 2313:
case 681:
case 3359:
case 435:
case 3626:
case 1496:
case 3699:
case 1992:
case 524:
case 436:
case 440:
case 3794:
case 1581:
case 628:
case 2872:
case 2858:
case 844:
case 2095:
case 3589:
case 1874:
case 3261:
case 3236:
case 2994:
case 1785:
case 3421:
case 101:
case 2260:
case 528:
case 2420:
case 723:
case 1457:
case 1541:
case 41:
case 2202:
case 3549:
case 1637:
case 1204:
case 3134:
case 1603:
case 3224:
case 4011:
case 3304:
case 3538:
case 3464:
case 2316:
case 1745:
case 2060:
case 508:
case 2725:
case 3970:
case 2509:
case 703:
case 3024:
case 1440:
case 1004:
case 2521:
case 1803:
case 1837:
case 3823:
case 3925:
case 1342:
case 511:
case 2489:
case 223:
case 212:
case 2384:
case 3899:
case 504:
case 2658:
case 608:
case 2971:
case 2438:
case 4008:
case 1273:
case 1779:
case 3575:
case 1891:
case 1382:
case 2168:
case 2449:
case 261:
case 1545:
case 1860:
case 1343:
case 1147:
case 3822:
case 474:
case 3090:
case 662:
case 2037:
case 2938:
case 1980:
case 3372:
case 1585:
case 3470:
case 3789:
case 1695:
case 1365:
case 1781:
case 2274:
case 2673:
case 3425:
case 866:
case 17:
case 2091:
case 3594:
case 1940:
case 3265:
case 3775:
case 2920:
case 3884:
case 973:
case 1058:
case 3964:
case 3113:
case 2975:
case 3317:
case 886:
case 2159:
case 2291:
case 582:
case 281:
case 1390:
case 3844:
case 3622:
case 490:
case 3290:
case 3909:
case 1602:
case 3043:
case 2721:
case 2604:
case 1901:
case 2237:
case 682:
case 2709:
case 2525:
case 2323:
case 4093:
case 926:
case 2124:
case 238:
case 2633:
case 80:
case 3996:
case 2528:
case 942:
case 3160:
case 3332:
case 441:
case 2796:
case 4057:
case 3847:
case 1122:
case 1232:
case 1613:
case 1214:
case 1898:
case 234:
case 2077:
case 2226:
case 2136:
case 2306:
case 2431:
case 3778:
case 1954:
case 302:
case 799:
case 4029:
case 3752:
case 1046:
case 1408:
case 2026:
case 3428:
case 1014:
case 533:
case 2182:
case 1368:
case 3268:
case 675:
case 3597:
case 1915:
case 3346:
case 3355:
case 3553:
case 3687:
case 1255:
case 2012:
case 3531:
case 3566:
case 4040:
case 575:
case 2833:
case 2807:
case 2935:
case 1539:
case 299:
case 1826:
case 3806:
case 2298:
case 3552:
case 405:
case 384:
case 871:
case 2387:
case 2646:
case 3027:
case 69:
case 3276:
case 276:
case 1908:
case 3928:
case 388:
case 396:
case 2347:
case 207:
case 2832:
case 2143:
case 780:
case 957:
case 2478:
case 1123:
case 2452:
case 3467:
case 3535:
case 1710:
case 227:
case 2632:
case 2886:
case 2190:
case 3766:
case 555:
case 4092:
case 1626:
case 1911:
case 1877:
case 3496:
case 1788:
case 3753:
case 425:
case 3191:
case 364:
case 3259:
case 655:
case 2855:
case 3351:
case 1612:
case 3919:
case 707:
case 314:
case 3336:
case 2865:
case 3361:
case 3691:
case 2518:
case 3785:
case 2114:
case 3874:
case 1261:
case 656:
case 1126:
case 1112:
case 2084:
case 2883:
case 426:
case 534:
case 3269:
case 775:
case 3992:
case 1699:
case 638:
case 1409:
case 3324:
case 852:
case 1304:
case 318:
case 1464:
case 1538:
case 556:
case 2216:
case 1042:
case 1623:
case 1224:
case 3603:
case 1134:
case 3457:
case 2044:
case 4030:
case 710:
case 2690:
case 2222:
case 301:
case 4019:
case 634:
case 733:
case 1925:
case 2501:
case 3440:
case 3004:
case 3803:
case 599:
case 3418:
case 3837:
case 1823:
case 2529:
case 2022:
case 2186:
case 2481:
case 1970:
case 1575:
case 3891:
case 2395:
case 1373:
case 3674:
case 1036:
case 3480:
case 477:
case 2979:
case 406:
case 2146:
case 2284:
case 233:
case 1520:
case 507:
case 649:
case 660:
case 1816:
case 2023:
case 1644:
case 1822:
case 1749:
case 1090:
case 1738:
case 3556:
case 2780:
case 3545:
case 905:
case 3860:
case 3343:
case 872:
case 2479:
case 549:
case 345:
case 1594:
case 560:
case 3017:
case 2861:
case 2836:
case 2682:
case 3405:
case 3781:
case 607:
case 1425:
case 3563:
case 1684:
case 3258:
case 3187:
case 1789:
case 3585:
case 363:
case 2718:
case 1317:
case 1065:
case 3700:
case 3993:
case 2391:
case 3895:
case 2882:
case 1964:
case 2636:
case 3762:
case 2962:
case 1884:
case 1083:
case 3058:
case 2793:
case 1775:
case 2151:
case 2505:
case 2463:
case 4067:
case 527:
case 2303:
case 2223:
case 2133:
case 1921:
case 2624:
case 255:
case 2729:
case 991:
case 680:
case 1290:
case 1844:
case 2485:
case 117:
case 925:
case 3660:
case 1289:
case 1783:
case 1974:
case 2671:
case 3758:
case 626:
case 1561:
case 2093:
case 2218:
case 1075:
case 438:
case 3389:
case 2894:
case 3000:
case 1765:
case 1381:
case 13:
case 879:
case 3569:
case 2972:
case 3062:
case 2516:
case 3338:
case 2001:
case 1524:
case 830:
case 542:
case 1743:
case 822:
case 3625:
case 3108:
case 4077:
case 2280:
case 1605:
case 1128:
case 3670:
case 3484:
case 3241:
case 2029:
case 143:
case 2522:
case 1903:
case 185:
case 1049:
case 1542:
case 94:
case 4026:
case 2321:
case 2469:
case 741:
case 2110:
case 577:
case 351:
case 2309:
case 2148:
case 910:
case 606:
case 1582:
case 3375:
case 2871:
case 2040:
case 4034:
case 1275:
case 3416:
case 2364:
case 2293:
case 0:
case 2018:
case 30:
case 499:
case 3200:
case 2188:
case 1220:
case 2257:
case 3320:
case 3081:
case 677:
case 2584:
case 3916:
case 2722:
case 3621:
case 2904:
case 1601:
case 2838:
case 4013:
case 1196:
case 3245:
case 1960:
case 449:
case 1724:
case 3609:
case 1356:
case 1345:
case 3769:
case 476:
case 1071:
case 1167:
case 3263:
case 2889:
case 99:
case 1840:
case 1363:
case 1403:
case 1818:
case 1565:
case 725:
case 1437:
case 3154:
case 1657:
case 3285:
case 2620:
case 1736:
case 791:
case 2969:
case 3572:
case 2973:
case 2784:
case 1995:
case 1640:
case 592:
case 1618:
case 896:
case 193:
case 888:
case 2092:
case 1379:
case 2599:
case 1782:
case 3984:
case 2744:
case 1801:
case 225:
case 2325:
case 2638:
case 1474:
case 2205:
case 2472:
case 884:
case 1590:
case 2370:
case 1829:
case 3944:
case 3809:
case 2138:
case 2228:
case 2149:
case 2308:
case 3066:
case 2468:
case 1947:
case 242:
case 1039:
case 1010:
case 3615:
case 3097:
case 821:
case 1514:
case 3998:
case 541:
case 2526:
case 2019:
case 1987:
case 2798:
case 895:
case 1088:
case 3854:
case 2175:
case 801:
case 2311:
case 3815:
case 3297:
case 1193:
case 2577:
case 3388:
case 2713:
case 1546:
case 1555:
case 818:
case 352:
case 44:
case 2230:
case 1157:
case 742:
case 2120:
case 3654:
case 1406:
case 2028:
case 999:
case 1331:
case 1366:
case 3266:
case 3121:
case 3310:
case 1733:
case 3727:
case 397:
case 433:
case 3412:
case 3252:
case 194:
case 2194:
case 1450:
case 2427:
case 3278:
case 3926:
case 1352:
case 960:
case 2267:
case 2726:
case 757:
case 3912:
case 1714:
case 2354:
case 1192:
case 605:
case 3808:
case 1828:
case 3413:
case 907:
case 2734:
case 2648:
case 186:
case 1105:
case 1628:
case 3125:
case 3498:
case 1786:
case 1335:
case 525:
case 2839:
case 845:
case 2848:
case 139:
case 2810:
case 1487:
case 3170:
case 3559:
case 170:
case 455:
case 2171:
case 2067:
case 3977:
case 1755:
case 3811:
case 980:
case 2513:
case 292:
case 2888:
case 1551:
case 593:
case 1476:
case 3215:
case 270:
case 2746:
case 1067:
case 2755:
case 798:
case 786:
case 2819:
case 417:
case 1888:
case 390:
case 4043:
case 2447:
case 3054:
case 1096:
case 2533:
case 3550:
case 693:
case 3866:
case 2335:
case 215:
case 3986:
case 4083:
case 298:
case 1459:
case 3396:
case 3666:
case 770:
case 3451:
case 3932:
case 3156:
case 286:
case 1648:
case 3145:
case 378:
case 294:
case 3697:
case 3367:
case 3015:
case 1194:
case 2450:
case 3433:
case 2378:
case 2352:
case 2906:
case 739:
case 766:
case 3587:
case 2619:
case 1354:
case 2714:
case 2630:
case 3008:
case 4036:
case 1028:
case 2406:
case 3835:
case 803:
case 2366:
case 2696:
case 3414:
case 1927:
case 3933:
case 2101:
case 987:
case 244:
case 2239:
case 389:
case 585:
case 2586:
case 2248:
case 2751:
case 3678:
case 1311:
case 1959:
case 920:
case 1577:
case 3211:
case 248:
case 3330:
case 2353:
case 1713:
case 2546:
case 1219:
case 3319:
case 685:
case 2288:
case 3100:
case 3951:
case 354:
case 4042:
case 744:
case 643:
case 53:
case 1526:
case 900:
case 3787:
case 1019:
case 1512:
case 1030:
case 3486:
case 358:
case 4082:
case 1228:
case 2180:
case 3208:
case 3328:
case 3747:
case 1534:
case 1468:
case 967:
case 369:
case 565:
case 2947:
case 3141:
case 750:
case 142:
case 2532:
case 3446:
case 2048:
case 3455:
case 126:
case 1744:
case 3503:
case 917:
case 3465:
case 2801:
case 2680:
case 539:
case 566:
case 2474:
case 862:
case 1472:
case 3270:
case 2590:
case 2742:
case 319:
case 515:
case 670:
case 1973:
case 639:
case 1689:
case 3982:
case 2893:
case 2640:
case 2618:
case 1875:
case 36:
case 615:
case 570:
case 1092:
case 2379:
case 1599:
case 3795:
case 686:
case 2167:
case 3574:
case 1889:
case 3936:
case 3961:
case 3152:
case 3178:
case 2818:
case 4033:
case 3600:
case 594:
case 2657:
case 1620:
case 3490:
case 2761:
case 2736:
case 2385:
case 3392:
case 3702:
case 105:
case 2601:
case 1838:
case 1417:
case 2880:
case 586:
case 2196:
case 3025:
case 2960:
case 4051:
case 694:
case 1716:
case 2356:
case 2345:
case 2629:
case 3663:
case 3393:
case 550:
case 1040:
case 1799:
case 1404:
case 2991:
case 1018:
case 3197:
case 2402:
case 3791:
case 4032:
case 828:
case 1188:
case 2692:
case 2220:
case 3153:
case 743:
case 2300:
case 2460:
case 548:
case 2119:
case 487:
case 3879:
case 3221:
case 3166:
case 285:
case 3131:
case 650:
case 3461:
case 1321:
case 73:
case 1469:
case 824:
case 3329:
case 648:
case 3656:
case 1139:
case 3703:
case 1544:
case 1723:
case 1516:
case 2249:
case 2524:
case 1473:
case 2128:
case 2238:
case 3560:
case 4046:
case 216:
case 804:
case 400:
case 1029:
case 3502:
case 1522:
case 3340:
case 3064:
case 2974:
case 785:
case 1218:
case 3442:
case 2075:
case 1894:
case 811:
case 1240:
case 2765:
case 2892:
case 808:
case 3885:
case 1958:
case 3774:
case 3679:
case 1505:
case 1463:
case 1303:
case 3323:
case 874:
case 1133:
case 2921:
case 1624:
case 1842:
case 155:
case 1729:
case 2622:
case 2909:
case 1485:
case 381:
case 3570:
case 2317:
case 3975:
case 2065:
case 878:
case 3159:
case 993:
case 1391:
case 2571:
case 3074:
case 2083:
case 3091:
case 1374:
case 2265:
case 1682:
case 3673:
case 3869:
case 1981:
case 486:
case 717:
case 2283:
case 2470:
case 2789:
case 2372:
case 1099:
case 2358:
case 890:
case 3471:
case 3938:
case 1642:
case 1824:
case 1023:
case 3176:
case 2822:
case 2644:
case 1941:
case 2749:
case 2738:
case 361:
case 1395:
case 3168:
case 1593:
case 3449:
case 3438:
case 3564:
case 2036:
case 2061:
case 869:
case 2177:
case 3672:
case 1146:
case 2771:
case 1284:
case 1683:
case 1155:
case 133:
case 312:
case 858:
case 2899:
case 1557:
case 1441:
case 2925:
case 3770:
case 448:
case 632:
case 587:
case 3489:
case 81:
case 2024:
case 1016:
case 450:
case 14:
case 1529:
case 231:
case 3002:
case 1643:
case 3725:
case 2970:
case 2464:
case 943:
case 567:
case 2549:
case 1216:
case 600:
case 1044:
case 1360:
case 1843:
case 3202:
case 965:
case 3322:
case 3994:
case 1518:
case 2421:
case 1114:
case 889:
case 2589:
case 3617:
case 2126:
case 667:
case 1963:
case 3872:
case 4010:
case 731:
case 1985:
case 2359:
case 2626:
case 617:
case 3117:
case 2911:
case 1614:
case 2788:
case 1997:
case 3868:
case 3515:
case 3988:
case 180:
case 2199:
case 1953:
case 3711:
case 966:
case 2207:
case 2634:
case 3250:
case 517:
case 88:
case 1350:
case 3939:
case 1632:
case 2454:
case 176:
case 1596:
case 4071:
case 3708:
case 1728:
case 1347:
case 873:
case 1832:
case 1686:
case 998:
case 1143:
case 3247:
case 1435:
case 819:
case 1567:
case 3668:
case 3554:
case 160:
case 1183:
case 1655:
case 994:
case 3172:
case 3827:
case 1807:
case 4089:
case 308:
case 2510:
case 287:
case 944:
case 2032:
case 2286:
case 2408:
case 1277:
case 3006:
case 4038:
case 3859:
case 485:
case 304:
case 3377:
case 4049:
case 2915:
case 3715:
case 2588:
case 1530:
case 2255:
case 1519:
case 232:
case 2246:
case 3206:
case 1161:
case 1226:
case 1136:
case 465:
case 1952:
case 324:
case 1466:
case 3754:
case 1978:
case 200:
case 1212:
case 2055:
case 3169:
case 416:
case 787:
case 2116:
case 3876:
case 1497:
case 1607:
case 138:
case 4075:
case 853:
case 328:
case 3334:
case 2411:
case 3508:
case 267:
case 1796:
case 4020:
case 2086:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743264002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,];
var gg_b = "1743264002/";

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
