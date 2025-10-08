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
case 2977:
case 2937:
case 170:
case 4024:
case 310:
case 902:
case 2475:
case 1984:
case 1245:
case 3714:
case 129:
case 430:
case 1114:
case 1939:
case 1979:
case 3930:
case 3970:
case 2060:
case 1432:
case 1472:
case 4090:
case 658:
case 1963:
case 492:
case 3395:
case 4018:
case 3875:
case 1657:
case 3835:
case 1954:
case 3416:
case 3762:
case 2659:
case 2404:
case 3525:
case 414:
case 108:
case 1451:
case 473:
case 2901:
case 3442:
case 137:
case 2376:
case 2336:
case 355:
case 121:
case 2727:
case 2823:
case 634:
case 666:
case 924:
case 2842:
case 1940:
case 1025:
case 3720:
case 762:
case 2573:
case 1729:
case 3129:
case 3702:
case 1102:
case 3052:
case 51:
case 1917:
case 1526:
case 3381:
case 4047:
case 1187:
case 2189:
case 1836:
case 1876:
case 1041:
case 1903:
case 2174:
case 3292:
case 1396:
case 239:
case 2345:
case 2412:
case 464:
case 949:
case 2159:
case 347:
case 343:
case 2483:
case 1157:
case 3757:
case 2105:
case 522:
case 3864:
case 504:
case 859:
case 1552:
case 1316:
case 660:
case 1236:
case 223:
case 2446:
case 3031:
case 3629:
case 3846:
case 712:
case 2758:
case 643:
case 647:
case 553:
case 1221:
case 2008:
case 890:
case 3253:
case 616:
case 794:
case 613:
case 617:
case 1681:
case 911:
case 1024:
case 998:
case 2192:
case 1280:
case 3274:
case 3234:
case 3289:
case 2993:
case 556:
case 481:
case 3061:
case 429:
case 130:
case 226:
case 3642:
case 1266:
case 3623:
case 1090:
case 192:
case 3205:
case 2926:
case 408:
case 374:
case 3259:
case 2146:
case 3795:
case 1250:
case 3834:
case 2736:
case 2776:
case 317:
case 3889:
case 173:
case 3394:
case 1880:
case 919:
case 2982:
case 3900:
case 568:
case 489:
case 1457:
case 2183:
case 3616:
case 2405:
case 2913:
case 65:
case 2675:
case 2635:
case 1010:
case 1487:
case 2153:
case 3805:
case 565:
case 5:
case 286:
case 1098:
case 2164:
case 3019:
case 1850:
case 1115:
case 2489:
case 10:
case 3715:
case 3518:
case 1599:
case 1985:
case 599:
case 2563:
case 2548:
case 220:
case 1206:
case 3302:
case 2049:
case 1911:
case 4041:
case 663:
case 1420:
case 961:
case 1151:
case 3357:
case 3922:
case 550:
case 640:
case 3968:
case 3001:
case 725:
case 2646:
case 2579:
case 2350:
case 893:
case 3142:
case 2683:
case 271:
case 1132:
case 1172:
case 3772:
case 3732:
case 2540:
case 872:
case 2612:
case 3865:
case 1806:
case 280:
case 1462:
case 3547:
case 788:
case 1973:
case 2229:
case 3960:
case 2030:
case 2070:
case 1969:
case 2664:
case 2344:
case 2358:
case 2653:
case 1227:
case 1414:
case 4078:
case 3815:
case 2662:
case 324:
case 3295:
case 3150:
case 2821:
case 3009:
case 596:
case 2157:
case 1105:
case 1453:
case 2187:
case 3085:
case 479:
case 2102:
case 1345:
case 3910:
case 1665:
case 2396:
case 420:
case 1780:
case 3734:
case 2903:
case 1919:
case 1189:
case 2415:
case 3789:
case 2836:
case 4030:
case 3375:
case 624:
case 2582:
case 2620:
case 2507:
case 384:
case 1758:
case 934:
case 3215:
case 86:
case 3924:
case 1509:
case 2513:
case 3304:
case 471:
case 910:
case 69:
case 2997:
case 3918:
case 244:
case 1999:
case 2276:
case 1788:
case 1446:
case 1585:
case 123:
case 127:
case 131:
case 2552:
case 3990:
case 2954:
case 341:
case 2657:
case 3091:
case 1605:
case 426:
case 2948:
case 2963:
case 2432:
case 3666:
case 1242:
case 1511:
case 700:
case 804:
case 2162:
case 3106:
case 1706:
case 1634:
case 778:
case 205:
case 882:
case 3522:
case 1056:
case 3568:
case 3765:
case 1165:
case 3832:
case 853:
case 1060:
case 2602:
case 2114:
case 2939:
case 281:
case 1475:
case 2687:
case 1816:
case 2245:
case 1842:
case 2025:
case 3011:
case 3127:
case 349:
case 1321:
case 1823:
case 3364:
case 3644:
case 3947:
case 1533:
case 1573:
case 2120:
case 822:
case 3881:
case 3383:
case 2451:
case 1569:
case 3688:
case 3312:
case 3556:
case 1216:
case 2845:
case 73:
case 221:
case 1022:
case 2567:
case 3272:
case 3232:
case 1336:
case 1376:
case 1043:
case 1366:
case 3262:
case 1038:
case 1078:
case 2151:
case 3305:
case 3820:
case 3359:
case 695:
case 3530:
case 1350:
case 2723:
case 2827:
case 2494:
case 1539:
case 3894:
case 1745:
case 1380:
case 179:
case 3214:
case 1554:
case 3427:
case 698:
case 3374:
case 1563:
case 3389:
case 452:
case 913:
case 8:
case 2420:
case 865:
case 487:
case 483:
case 1049:
case 1692:
case 2911:
case 0:
case 946:
case 439:
case 2969:
case 3039:
case 3079:
case 3621:
case 2615:
case 1030:
case 4008:
case 3862:
case 3828:
case 95:
case 2227:
case 1175:
case 1653:
case 3775:
case 3538:
case 974:
case 1664:
case 1540:
case 619:
case 1388:
case 311:
case 1683:
case 171:
case 1104:
case 3704:
case 2973:
case 180:
case 2462:
case 2991:
case 3054:
case 3048:
case 427:
case 292:
case 3257:
case 1517:
case 2090:
case 572:
case 2651:
case 3097:
case 818:
case 891:
case 2195:
case 2858:
case 214:
case 1503:
case 3746:
case 2519:
case 2888:
case 3458:
case 4056:
case 3792:
case 1931:
case 4060:
case 1993:
case 3645:
case 1164:
case 3003:
case 3941:
case 3764:
case 2866:
case 186:
case 2402:
case 2098:
case 2487:
case 1153:
case 1675:
case 2010:
case 3753:
case 1597:
case 2244:
case 1434:
case 2985:
case 1489:
case 2258:
case 703:
case 1721:
case 1952:
case 1327:
case 3121:
case 2880:
case 597:
case 593:
case 1112:
case 77:
case 1776:
case 1736:
case 1459:
case 3176:
case 273:
case 2909:
case 3887:
case 3466:
case 2632:
case 3802:
case 4022:
case 1800:
case 3015:
case 2902:
case 2987:
case 2021:
case 2117:
case 2679:
case 3719:
case 2103:
case 1637:
case 1974:
case 1934:
case 3198:
case 1989:
case 1710:
case 3110:
case 849:
case 43:
case 1452:
case 1482:
case 1407:
case 3885:
case 2368:
case 2409:
case 2648:
case 3966:
case 2076:
case 682:
case 107:
case 2663:
case 2841:
case 2553:
case 2564:
case 1200:
case 304:
case 1718:
case 3118:
case 3958:
case 3647:
case 3761:
case 3944:
case 2356:
case 726:
case 475:
case 2640:
case 2241:
case 3124:
case 3211:
case 1551:
case 2308:
case 510:
case 3393:
case 3610:
case 771:
case 2225:
case 2603:
case 1619:
case 3331:
case 1886:
case 288:
case 2139:
case 2179:
case 2184:
case 780:
case 2770:
case 36:
case 884:
case 1856:
case 2148:
case 285:
case 534:
case 348:
case 2433:
case 201:
case 1222:
case 1581:
case 3869:
case 3233:
case 779:
case 406:
case 3690:
case 3291:
case 1101:
case 3307:
case 555:
case 645:
case 228:
case 2535:
case 2738:
case 2778:
case 3382:
case 2697:
case 3051:
case 720:
case 3081:
case 225:
case 2749:
case 1256:
case 3352:
case 3624:
case 1572:
case 1532:
case 558:
case 2140:
case 1822:
case 1096:
case 89:
case 1341:
case 1260:
case 1029:
case 618:
case 3319:
case 1631:
case 1230:
case 2440:
case 3945:
case 3020:
case 1310:
case 3239:
case 47:
case 1878:
case 1838:
case 3447:
case 1528:
case 2981:
case 2111:
case 861:
case 2951:
case 3094:
case 2743:
case 2847:
case 3248:
case 407:
case 1849:
case 1626:
case 3254:
case 3840:
case 1401:
case 3263:
case 2454:
case 178:
case 2609:
case 1278:
case 2786:
case 3839:
case 318:
case 2463:
case 699:
case 3399:
case 2972:
case 2932:
case 567:
case 563:
case 1682:
case 2655:
case 2760:
case 435:
case 2247:
case 2685:
case 1477:
case 3014:
case 972:
case 2006:
case 3361:
case 3767:
case 3641:
case 1594:
case 2479:
case 1975:
case 2484:
case 3854:
case 2890:
case 1992:
case 3625:
case 2330:
case 2298:
case 1461:
case 2559:
case 2818:
case 1557:
case 3217:
case 3424:
case 2708:
case 2505:
case 3897:
case 1193:
case 2058:
case 2044:
case 3731:
case 3771:
case 1131:
case 3377:
case 3337:
case 6:
case 2088:
case 64:
case 1587:
case 2824:
case 2589:
case 4016:
case 294:
case 898:
case 574:
case 811:
case 3490:
case 106:
case 3803:
case 2218:
case 3707:
case 3782:
case 1182:
case 513:
case 4042:
case 2691:
case 2810:
case 3057:
case 2700:
case 739:
case 3817:
case 787:
case 1953:
case 3:
case 365:
case 2080:
case 1667:
case 1741:
case 3141:
case 819:
case 1152:
case 2349:
case 3921:
case 2403:
case 3002:
case 2915:
case 3748:
case 3545:
case 1163:
case 651:
case 412:
case 953:
case 494:
case 2581:
case 2268:
case 2016:
case 2222:
case 101:
case 2860:
case 1962:
case 1473:
case 1928:
case 2177:
case 2619:
case 3035:
case 2965:
case 2551:
case 1469:
case 3170:
case 3784:
case 3456:
case 3739:
case 1914:
case 42:
case 1139:
case 1179:
case 3740:
case 2572:
case 3385:
case 860:
case 125:
case 351:
case 3149:
case 632:
case 1504:
case 2260:
case 3929:
case 2843:
case 109:
case 2868:
case 2822:
case 1045:
case 690:
case 2023:
case 3309:
case 2699:
case 2042:
case 1575:
case 2286:
case 3178:
case 3138:
case 2101:
case 847:
case 843:
case 1455:
case 2959:
case 3852:
case 462:
case 1663:
case 1076:
case 3400:
case 207:
case 203:
case 1957:
case 2905:
case 1368:
case 1648:
case 2413:
case 3717:
case 1021:
case 1679:
case 3311:
case 1639:
case 59:
case 1117:
case 1684:
case 3293:
case 2800:
case 1902:
case 27:
case 3630:
case 3231:
case 3271:
case 2452:
case 2595:
case 2798:
case 254:
case 2974:
case 3064:
case 3703:
case 235:
case 3576:
case 792:
case 2493:
case 696:
case 714:
case 3369:
case 3408:
case 3649:
case 4006:
case 810:
case 2471:
case 1360:
case 1640:
case 3046:
case 2200:
case 2601:
case 3333:
case 3871:
case 3373:
case 3831:
case 1553:
case 3678:
case 3391:
case 3893:
case 2426:
case 3797:
case 502:
case 834:
case 2718:
case 3207:
case 945:
case 2790:
case 1497:
case 2126:
case 485:
case 1088:
case 863:
case 867:
case 2502:
case 3668:
case 3580:
case 3622:
case 3354:
case 2499:
case 1574:
case 3363:
case 3861:
case 1589:
case 401:
case 1818:
case 1330:
case 3550:
case 3384:
case 918:
case 2992:
case 1611:
case 3566:
case 569:
case 488:
case 1058:
case 2193:
case 2557:
case 3108:
case 425:
case 950:
case 2741:
case 3074:
case 3034:
case 2347:
case 1080:
case 1915:
case 3660:
case 3340:
case 4045:
case 1669:
case 776:
case 3005:
case 1810:
case 2182:
case 1338:
case 2107:
case 3755:
case 3819:
case 206:
case 397:
case 393:
case 2983:
case 3686:
case 3709:
case 2113:
case 3059:
case 3506:
case 3143:
case 1847:
case 94:
case 1951:
case 3122:
case 9:
case 817:
case 2401:
case 3942:
case 162:
case 2514:
case 4076:
case 4036:
case 3923:
case 3996:
case 2878:
case 3449:
case 2693:
case 519:
case 2398:
case 1440:
case 2631:
case 2671:
case 3711:
case 968:
case 737:
case 23:
case 2528:
case 3277:
case 2562:
case 1169:
case 2652:
case 2324:
case 3160:
case 3065:
case 2975:
case 2594:
case 275:
case 1479:
case 200:
case 595:
case 3470:
case 1006:
case 1972:
case 1932:
case 3600:
case 2830:
case 2870:
case 1463:
case 442:
case 3201:
case 874:
case 2390:
case 1609:
case 278:
case 2613:
case 1786:
case 1448:
case 1454:
case 3916:
case 770:
case 85:
case 2904:
case 3773:
case 3733:
case 729:
case 2682:
case 1191:
case 3791:
case 2317:
case 2237:
case 2277:
case 1447:
case 886:
case 1125:
case 33:
case 3528:
case 1945:
case 3693:
case 2608:
case 1239:
case 2996:
case 3838:
case 199:
case 3029:
case 3631:
case 2942:
case 1840:
case 675:
case 3401:
case 1248:
case 3849:
case 1254:
case 3514:
case 3626:
case 2506:
case 564:
case 2122:
case 2733:
case 2837:
case 1028:
case 1062:
case 3830:
case 1884:
case 191:
case 4095:
case 2916:
case 3390:
case 118:
case 1879:
case 404:
case 3249:
case 300:
case 1240:
case 2470:
case 3167:
case 482:
case 1641:
case 1767:
case 1014:
case 2769:
case 3652:
case 3324:
case 457:
case 453:
case 912:
case 3477:
case 702:
case 445:
case 2566:
case 1771:
case 156:
case 1377:
case 3171:
case 3131:
case 3557:
case 46:
case 1897:
case 1793:
case 1625:
case 3461:
case 2219:
case 1203:
case 2550:
case 2384:
case 2354:
case 4032:
case 2348:
case 2363:
case 2643:
case 3499:
case 3946:
case 3126:
case 784:
case 3587:
case 880:
case 1297:
case 2100:
case 4051:
case 577:
case 2005:
case 306:
case 297:
case 293:
case 3107:
case 2755:
case 1803:
case 1707:
case 2819:
case 2261:
case 1002:
case 2660:
case 1498:
case 962:
case 1752:
case 3152:
case 3964:
case 2074:
case 1141:
case 2656:
case 1:
case 3452:
case 3119:
case 3974:
case 3934:
case 2703:
case 638:
case 1855:
case 3677:
case 1809:
case 3208:
case 2813:
case 2231:
case 1441:
case 3800:
case 499:
case 1015:
case 2400:
case 1966:
case 307:
case 296:
case 909:
case 2226:
case 2012:
case 4094:
case 1885:
case 1950:
case 925:
case 450:
case 769:
case 3718:
case 1255:
case 1118:
case 2207:
case 3199:
case 1799:
case 2521:
case 1190:
case 654:
case 988:
case 1095:
case 2373:
case 2333:
case 2871:
case 2046:
case 104:
case 3200:
case 418:
case 4028:
case 2391:
case 3426:
case 4062:
case 2678:
case 1209:
case 2638:
case 2369:
case 2092:
case 2649:
case 1124:
case 3493:
case 901:
case 2826:
case 3431:
case 3471:
case 335:
case 4014:
case 157:
case 3161:
case 1944:
case 1761:
case 2576:
case 1647:
case 2130:
case 529:
case 3467:
case 581:
case 2739:
case 2779:
case 2784:
case 1698:
case 1906:
case 3137:
case 1331:
case 3619:
case 1873:
case 1610:
case 942:
case 2075:
case 3016:
case 1326:
case 3581:
case 3243:
case 508:
case 1032:
case 2754:
case 259:
case 2545:
case 2486:
case 2867:
case 2004:
case 533:
case 537:
case 2138:
case 1382:
case 3286:
case 589:
case 2355:
case 2309:
case 2468:
case 2422:
case 1291:
case 3699:
case 3042:
case 1273:
case 1618:
case 4057:
case 3661:
case 3747:
case 1147:
case 4087:
case 3843:
case 1425:
case 3822:
case 4002:
case 3868:
case 887:
case 3532:
case 3572:
case 2740:
case 1081:
case 44:
case 251:
case 1624:
case 1927:
case 3534:
case 3574:
case 900:
case 432:
case 3589:
case 1861:
case 3995:
case 2418:
case 1668:
case 1348:
case 1580:
case 3088:
case 459:
case 3824:
case 2726:
case 172:
case 4004:
case 68:
case 2897:
case 1108:
case 2424:
case 3505:
case 1566:
case 2771:
case 2731:
case 256:
case 2377:
case 3058:
case 1384:
case 1550:
case 3890:
case 978:
case 1219:
case 3559:
case 2203:
case 3818:
case 1899:
case 2752:
case 3669:
case 3349:
case 2921:
case 694:
case 1340:
case 1588:
case 3185:
case 1656:
case 2:
case 265:
case 747:
case 743:
case 612:
case 24:
case 451:
case 2141:
case 864:
case 836:
case 93:
case 1059:
case 62:
case 3109:
case 2713:
case 268:
case 3218:
case 1558:
case 2707:
case 3673:
case 1819:
case 197:
case 3898:
case 1544:
case 2936:
case 3066:
case 1299:
case 3338:
case 2254:
case 1478:
case 496:
case 2263:
case 4012:
case 1942:
case 2840:
case 3951:
case 2094:
case 1168:
case 3847:
case 4083:
case 755:
case 2125:
case 1237:
case 4053:
case 1711:
case 3027:
case 3111:
case 3981:
case 4064:
case 579:
case 3440:
case 906:
case 1303:
case 1608:
case 2945:
case 2284:
case 2361:
case 2767:
case 2240:
case 662:
case 4092:
case 3006:
case 1430:
case 3484:
case 2854:
case 3439:
case 2848:
case 830:
case 734:
case 892:
case 1791:
case 2529:
case 1773:
case 1877:
case 3173:
case 3133:
case 3609:
case 2839:
case 291:
case 1916:
case 2399:
case 3972:
case 3932:
case 2028:
case 2072:
case 3928:
case 2869:
case 301:
case 1867:
case 844:
case 3163:
case 625:
case 1763:
case 1004:
case 472:
case 1748:
case 1486:
case 3148:
case 3154:
case 1754:
case 767:
case 2523:
case 1456:
case 938:
case 388:
case 3617:
case 2542:
case 26:
case 1130:
case 2393:
case 2891:
case 3469:
case 2777:
case 2331:
case 2873:
case 2906:
case 1460:
case 3225:
case 2269:
case 3045:
case 3504:
case 907:
case 601:
case 2147:
case 1929:
case 2516:
case 2927:
case 4089:
case 688:
case 954:
case 1355:
case 3697:
case 3994:
case 2051:
case 3778:
case 3738:
case 3535:
case 1138:
case 1178:
case 4059:
case 1422:
case 2291:
case 1309:
case 1468:
case 497:
case 3957:
case 1226:
case 3322:
case 3654:
case 2966:
case 196:
case 3592:
case 2950:
case 821:
case 1852:
case 2198:
case 539:
case 2719:
case 3103:
case 1064:
case 3546:
case 3485:
case 2980:
case 583:
case 1882:
case 746:
case 1670:
case 1630:
case 3902:
case 1271:
case 1231:
case 2441:
case 2809:
case 3117:
case 3987:
case 1293:
case 713:
case 717:
case 4065:
case 3241:
case 3640:
case 2285:
case 2958:
case 3512:
case 1252:
case 527:
case 523:
case 2190:
case 3386:
case 1521:
case 2988:
case 2799:
case 2255:
case 1213:
case 3553:
case 1638:
case 2209:
case 1893:
case 3564:
case 1046:
case 204:
case 1333:
case 1373:
case 1831:
case 1871:
case 1061:
case 2202:
case 980:
case 330:
case 2645:
case 2365:
case 1908:
case 269:
case 1234:
case 2444:
case 1289:
case 677:
case 4067:
case 2792:
case 3024:
case 1314:
case 3280:
case 410:
case 3250:
case 2097:
case 60:
case 3858:
case 314:
case 3519:
case 1259:
case 174:
case 1598:
case 1795:
case 434:
case 3090:
case 1623:
case 392:
case 1642:
case 1099:
case 3266:
case 3018:
case 1328:
case 2887:
case 2783:
case 1524:
case 3909:
case 1900:
case 2802:
case 146:
case 920:
case 2450:
case 3880:
case 1874:
case 3955:
case 117:
case 3288:
case 373:
case 377:
case 1518:
case 1715:
case 3244:
case 3985:
case 3850:
case 2017:
case 2121:
case 614:
case 3866:
case 3402:
case 1019:
case 2003:
case 2764:
case 3487:
case 2753:
case 460:
case 53:
case 3911:
case 1387:
case 3181:
case 1302:
case 1429:
case 1196:
case 2214:
case 2427:
case 3796:
case 2145:
case 4052:
case 3047:
case 4082:
case 3723:
case 416:
case 2228:
case 88:
case 751:
case 1943:
case 986:
case 3537:
case 1357:
case 3151:
case 2305:
case 2820:
case 447:
case 443:
case 163:
case 1547:
case 3462:
case 2676:
case 2636:
case 4026:
case 3933:
case 2048:
case 3172:
case 3132:
case 1772:
case 894:
case 1986:
case 790:
case 3716:
case 2294:
case 2549:
case 2775:
case 2735:
case 1956:
case 3227:
case 500:
case 3414:
case 295:
case 1037:
case 3501:
case 732:
case 575:
case 4031:
case 664:
case 2220:
case 3969:
case 2079:
case 2039:
case 2828:
case 3615:
case 926:
case 1930:
case 621:
case 637:
case 4061:
case 3245:
case 1714:
case 3939:
case 3114:
case 2392:
case 1804:
case 2765:
case 305:
case 2680:
case 308:
case 2650:
case 474:
case 2251:
case 1762:
case 3162:
case 3128:
case 3948:
case 3954:
case 1835:
case 1416:
case 2091:
case 2666:
case 3432:
case 3472:
case 166:
case 3963:
case 3845:
case 1794:
case 1423:
case 389:
case 629:
case 3567:
case 333:
case 681:
case 2232:
case 2272:
case 987:
case 2881:
case 3451:
case 417:
case 952:
case 2560:
case 2688:
case 2658:
case 2364:
case 2947:
case 1129:
case 2353:
case 2851:
case 1315:
case 2011:
case 2127:
case 1949:
case 2586:
case 2445:
case 2180:
case 1292:
case 2421:
case 1812:
case 554:
case 3415:
case 2606:
case 160:
case 2774:
case 3903:
case 3041:
case 57:
case 1052:
case 3917:
case 3614:
case 1381:
case 1883:
case 1787:
case 29:
case 1702:
case 2085:
case 1007:
case 376:
case 116:
case 3157:
case 2705:
case 1757:
case 507:
case 2815:
case 143:
case 3342:
case 2476:
case 3662:
case 2759:
case 828:
case 2150:
case 1013:
case 3821:
case 2009:
case 538:
case 3236:
case 1332:
case 2918:
case 467:
case 463:
case 2990:
case 1892:
case 1026:
case 202:
case 885:
case 1212:
case 3552:
case 2304:
case 801:
case 3694:
case 1283:
case 676:
case 2924:
case 2335:
case 3620:
case 1031:
case 1071:
case 2144:
case 535:
case 772:
case 2215:
case 3584:
case 2123:
case 3579:
case 3539:
case 90:
case 1359:
case 1570:
case 424:
case 2922:
case 2357:
case 2751:
case 3366:
case 3646:
case 2001:
case 2943:
case 3829:
case 2429:
case 1925:
case 2302:
case 680:
case 3049:
case 3692:
case 1374:
case 1334:
case 1389:
case 977:
case 973:
case 671:
case 1894:
case 1214:
case 49:
case 1427:
case 3358:
case 3967:
case 3344:
case 1578:
case 1775:
case 3070:
case 3030:
case 1079:
case 1039:
case 1084:
case 992:
case 3612:
case 620:
case 1054:
case 1048:
case 3104:
case 402:
case 267:
case 1636:
case 3683:
case 2116:
case 1294:
case 3540:
case 2732:
case 2772:
case 1746:
case 1488:
case 3503:
case 274:
case 782:
case 3146:
case 2510:
case 594:
case 441:
case 2328:
case 4091:
case 512:
case 2205:
case 3926:
case 1257:
case 686:
case 1645:
case 3993:
case 1287:
case 1365:
case 1202:
case 3971:
case 3931:
case 1792:
case 704:
case 875:
case 1458:
case 2289:
case 800:
case 2234:
case 1444:
case 2590:
case 1017:
case 3721:
case 1121:
case 722:
case 2715:
case 1857:
case 3597:
case 3164:
case 2019:
case 1003:
case 1764:
case 1941:
case 936:
case 449:
case 386:
case 3913:
case 1887:
case 161:
case 2524:
case 3405:
case 2616:
case 3459:
case 3736:
case 2889:
case 217:
case 1136:
case 3907:
case 3604:
case 2834:
case 1450:
case 3982:
case 2394:
case 3112:
case 71:
case 2082:
case 1508:
case 3105:
case 1166:
case 216:
case 2864:
case 2007:
case 2013:
case 1150:
case 74:
case 3159:
case 243:
case 247:
case 1436:
case 1476:
case 768:
case 383:
case 387:
case 1998:
case 933:
case 937:
case 1789:
case 921:
case 1910:
case 2292:
case 339:
case 19:
case 2702:
case 2381:
case 2883:
case 495:
case 908:
case 4079:
case 4039:
case 3758:
case 1144:
case 4084:
case 3492:
case 1375:
case 1335:
case 331:
case 2026:
case 687:
case 2212:
case 756:
case 1990:
case 4048:
case 3446:
case 3788:
case 2283:
case 905:
case 652:
case 1304:
case 411:
case 542:
case 970:
case 715:
case 2728:
case 2525:
case 2762:
case 1251:
case 3086:
case 1073:
case 2395:
case 1666:
case 234:
case 266:
case 3242:
case 1346:
case 2875:
case 2835:
case 2416:
case 1091:
case 2714:
case 3296:
case 1392:
case 588:
case 1872:
case 1832:
case 2970:
case 944:
case 3060:
case 3056:
case 1568:
case 1106:
case 3689:
case 3977:
case 2067:
case 3674:
case 2720:
case 3591:
case 3573:
case 1586:
case 1445:
case 2275:
case 4003:
case 750:
case 2496:
case 3823:
case 149:
case 1127:
case 2949:
case 2442:
case 528:
case 3336:
case 3376:
case 1232:
case 1272:
case 3068:
case 2423:
case 2978:
case 1556:
case 3216:
case 1312:
case 255:
case 799:
case 807:
case 803:
case 3569:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759910402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,];
var gg_b = "1759910402/";

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
