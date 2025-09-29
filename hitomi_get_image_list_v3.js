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
case 3350:
case 1551:
case 807:
case 952:
case 3178:
case 1055:
case 2520:
case 2885:
case 572:
case 2204:
case 1249:
case 321:
case 1195:
case 782:
case 1454:
case 3330:
case 2413:
case 1062:
case 2:
case 250:
case 577:
case 3607:
case 1900:
case 2570:
case 802:
case 1397:
case 4003:
case 1641:
case 3360:
case 382:
case 2612:
case 721:
case 1293:
case 1277:
case 905:
case 864:
case 919:
case 1522:
case 3119:
case 114:
case 63:
case 853:
case 2826:
case 1848:
case 1817:
case 2050:
case 1525:
case 43:
case 1575:
case 2060:
case 2905:
case 1572:
case 3598:
case 2788:
case 2030:
case 2216:
case 3948:
case 599:
case 855:
case 906:
case 566:
case 1071:
case 1110:
case 516:
case 2897:
case 3211:
case 995:
case 2873:
case 3889:
case 513:
case 2950:
case 2213:
case 1264:
case 3871:
case 1208:
case 3758:
case 2404:
case 1296:
case 3768:
case 1382:
case 993:
case 164:
case 3704:
case 271:
case 1254:
case 2468:
case 1989:
case 2960:
case 969:
case 3738:
case 4014:
case 515:
case 153:
case 683:
case 3865:
case 483:
case 2115:
case 3716:
case 3862:
case 4006:
case 686:
case 3107:
case 486:
case 102:
case 2380:
case 1791:
case 430:
case 1369:
case 685:
case 1326:
case 1477:
case 3678:
case 3302:
case 1932:
case 3855:
case 938:
case 3909:
case 719:
case 3381:
case 497:
case 374:
case 2649:
case 1580:
case 2767:
case 1517:
case 697:
case 1490:
case 1668:
case 244:
case 3467:
case 4062:
case 3972:
case 4035:
case 3806:
case 2539:
case 2383:
case 4032:
case 2047:
case 1003:
case 886:
case 306:
case 1638:
case 2241:
case 584:
case 830:
case 3925:
case 319:
case 1212:
case 3457:
case 2576:
case 1872:
case 706:
case 4055:
case 1875:
case 3792:
case 2582:
case 2933:
case 2492:
case 3083:
case 236:
case 3691:
case 2081:
case 479:
case 2963:
case 679:
case 233:
case 3931:
case 3145:
case 1728:
case 1616:
case 1861:
case 3142:
case 2287:
case 4021:
case 2627:
case 987:
case 3299:
case 3446:
case 2036:
case 235:
case 13:
case 2870:
case 280:
case 2164:
case 2066:
case 757:
case 464:
case 3061:
case 2664:
case 2979:
case 2544:
case 2375:
case 2994:
case 1707:
case 3257:
case 2608:
case 656:
case 3443:
case 2956:
case 3642:
case 3562:
case 2127:
case 2441:
case 1412:
case 2981:
case 338:
case 3741:
case 1116:
case 83:
case 1883:
case 2053:
case 2936:
case 2193:
case 2966:
case 738:
case 3191:
case 2322:
case 3267:
case 393:
case 795:
case 1098:
case 941:
case 185:
case 28:
case 3363:
case 1370:
case 1158:
case 208:
case 4000:
case 2947:
case 2361:
case 2799:
case 369:
case 3787:
case 2597:
case 396:
case 3246:
case 2487:
case 2918:
case 3333:
case 3424:
case 2724:
case 793:
case 520:
case 2523:
case 3025:
case 3521:
case 2295:
case 2386:
case 1006:
case 1104:
case 602:
case 3171:
case 245:
case 704:
case 14:
case 583:
case 1558:
case 1270:
case 2659:
case 120:
case 586:
case 2261:
case 1810:
case 2057:
case 2173:
case 3189:
case 3233:
case 2639:
case 2123:
case 530:
case 884:
case 2251:
case 243:
case 1019:
case 376:
case 2669:
case 2747:
case 1703:
case 2395:
case 1648:
case 1568:
case 2037:
case 4042:
case 3121:
case 2626:
case 3807:
case 2736:
case 2275:
case 3357:
case 3135:
case 2046:
case 1109:
case 2144:
case 1028:
case 3429:
case 1516:
case 613:
case 2766:
case 3162:
case 1841:
case 362:
case 2729:
case 328:
case 3466:
case 413:
case 2815:
case 2527:
case 2794:
case 2577:
case 1907:
case 2593:
case 3095:
case 2779:
case 3337:
case 2483:
case 1078:
case 415:
case 2222:
case 728:
case 2685:
case 615:
case 3591:
case 234:
case 2781:
case 409:
case 2185:
case 1420:
case 2946:
case 2596:
case 1892:
case 3786:
case 3247:
case 465:
case 3751:
case 3655:
case 53:
case 3324:
case 2451:
case 3878:
case 223:
case 3652:
case 312:
case 2534:
case 3992:
case 3374:
case 3399:
case 3761:
case 663:
case 12:
case 3041:
case 225:
case 2431:
case 931:
case 499:
case 717:
case 2763:
case 666:
case 3731:
case 140:
case 1470:
case 3635:
case 3463:
case 3725:
case 2422:
case 1148:
case 3819:
case 2126:
case 2024:
case 2890:
case 3621:
case 3722:
case 2425:
case 672:
case 1706:
case 2283:
case 3279:
case 2957:
case 2967:
case 2341:
case 4091:
case 278:
case 2697:
case 1919:
case 1315:
case 1798:
case 3266:
case 84:
case 1312:
case 3772:
case 2475:
case 2176:
case 3087:
case 2074:
case 3775:
case 4084:
case 2099:
case 3010:
case 3236:
case 2515:
case 1765:
case 3013:
case 1661:
case 4019:
case 1541:
case 507:
case 1762:
case 3388:
case 2409:
case 1042:
case 3709:
case 1045:
case 872:
case 3507:
case 2670:
case 877:
case 2620:
case 3891:
case 2280:
case 64:
case 420:
case 3916:
case 1239:
case 928:
case 2893:
case 502:
case 2877:
case 3205:
case 1755:
case 1473:
case 973:
case 3460:
case 1497:
case 1510:
case 3311:
case 904:
case 3938:
case 1364:
case 976:
case 3430:
case 1858:
case 553:
case 4078:
case 2730:
case 115:
case 21:
case 1308:
case 1622:
case 1282:
case 1868:
case 3103:
case 1354:
case 975:
case 854:
case 113:
case 3958:
case 1423:
case 3450:
case 3402:
case 994:
case 3004:
case 959:
case 2601:
case 3405:
case 3068:
case 816:
case 1469:
case 1125:
case 2417:
case 2988:
case 154:
case 3038:
case 1122:
case 3780:
case 579:
case 3717:
case 2940:
case 1476:
case 815:
case 809:
case 1327:
case 1151:
case 3250:
case 597:
case 177:
case 2911:
case 1595:
case 1482:
case 1186:
case 1945:
case 2304:
case 1349:
case 1592:
case 2120:
case 2896:
case 1942:
case 2358:
case 3230:
case 3016:
case 2170:
case 1131:
case 3260:
case 3845:
case 731:
case 3842:
case 2432:
case 3444:
case 1507:
case 2543:
case 3984:
case 2663:
case 3045:
case 1614:
case 3259:
case 2744:
case 3541:
case 239:
case 404:
case 3661:
case 2064:
case 673:
case 3991:
case 604:
case 473:
case 2633:
case 1202:
case 3752:
case 2096:
case 3239:
case 1205:
case 1884:
case 2156:
case 831:
case 475:
case 3269:
case 675:
case 3686:
case 3675:
case 309:
case 3364:
case 1430:
case 3771:
case 1938:
case 315:
case 2471:
case 667:
case 541:
case 1698:
case 1460:
case 3334:
case 3473:
case 2489:
case 2797:
case 4095:
case 467:
case 3587:
case 2345:
case 2574:
case 2949:
case 1311:
case 716:
case 313:
case 2200:
case 428:
case 3838:
case 462:
case 2524:
case 1606:
case 3423:
case 709:
case 2147:
case 3868:
case 316:
case 281:
case 3721:
case 2118:
case 920:
case 2618:
case 1717:
case 2647:
case 1603:
case 399:
case 3426:
case 1038:
case 1519:
case 1780:
case 4041:
case 366:
case 1106:
case 3377:
case 2384:
case 612:
case 1402:
case 765:
case 363:
case 2537:
case 417:
case 799:
case 766:
case 754:
case 617:
case 3327:
case 3172:
case 2759:
case 365:
case 3244:
case 2232:
case 3459:
case 2776:
case 131:
case 3945:
case 4010:
case 3349:
case 92:
case 2077:
case 3186:
case 2681:
case 3482:
case 2785:
case 940:
case 2782:
case 772:
case 2153:
case 1578:
case 247:
case 2656:
case 2400:
case 659:
case 2964:
case 3683:
case 377:
case 2679:
case 3091:
case 3223:
case 648:
case 1250:
case 1913:
case 459:
case 2289:
case 1845:
case 2954:
case 2629:
case 372:
case 1528:
case 777:
case 1114:
case 1016:
case 587:
case 2271:
case 3131:
case 2636:
case 2027:
case 3810:
case 3887:
case 1189:
case 2160:
case 1171:
case 2130:
case 320:
case 595:
case 894:
case 3220:
case 3504:
case 1418:
case 1987:
case 1447:
case 3648:
case 593:
case 3401:
case 2150:
case 173:
case 2602:
case 2090:
case 3019:
case 4013:
case 2298:
case 1165:
case 3841:
case 3028:
case 1132:
case 812:
case 817:
case 1591:
case 1783:
case 1152:
case 1584:
case 3907:
case 1600:
case 1479:
case 2206:
case 1494:
case 1324:
case 1655:
case 740:
case 689:
case 1100:
case 1878:
case 4058:
case 1218:
case 3928:
case 3420:
case 3895:
case 2203:
case 1632:
case 2015:
case 3513:
case 1041:
case 32:
case 557:
case 2012:
case 1463:
case 3470:
case 340:
case 3978:
case 1542:
case 1399:
case 977:
case 1545:
case 3007:
case 3706:
case 2105:
case 2650:
case 876:
case 2406:
case 2102:
case 1819:
case 965:
case 3117:
case 631:
case 2630:
case 2857:
case 1010:
case 1775:
case 954:
case 506:
case 574:
case 3919:
case 2990:
case 1229:
case 2660:
case 784:
case 3312:
case 503:
case 148:
case 963:
case 1356:
case 1806:
case 2502:
case 1972:
case 3638:
case 106:
case 2505:
case 1975:
case 895:
case 3604:
case 174:
case 594:
case 3580:
case 261:
case 1467:
case 3998:
case 3872:
case 3906:
case 1457:
case 1243:
case 1925:
case 288:
case 487:
case 20:
case 2188:
case 3212:
case 893:
case 2478:
case 512:
case 1318:
case 1792:
case 3886:
case 1691:
case 1347:
case 1961:
case 1814:
case 1951:
case 2863:
case 3831:
case 2111:
case 3728:
case 2920:
case 1274:
case 2428:
case 2398:
case 1031:
case 4048:
case 2866:
case 1741:
case 2070:
case 2836:
case 1257:
case 3613:
case 1532:
case 907:
case 1061:
case 2407:
case 441:
case 1191:
case 3290:
case 562:
case 2219:
case 902:
case 2894:
case 1555:
case 2879:
case 3883:
case 1552:
case 576:
case 1787:
case 169:
case 1710:
case 786:
case 2228:
case 1499:
case 1246:
case 2688:
case 3098:
case 2530:
case 193:
case 330:
case 964:
case 956:
case 3370:
case 504:
case 2901:
case 1363:
case 3320:
case 1353:
case 1803:
case 955:
case 211:
case 3006:
case 1022:
case 730:
case 2278:
case 2550:
case 874:
case 29:
case 93:
case 2754:
case 121:
case 392:
case 3496:
case 2553:
case 3192:
case 3055:
case 3454:
case 419:
case 605:
case 1800:
case 619:
case 3551:
case 187:
case 3373:
case 3561:
case 2985:
case 3434:
case 2044:
case 1009:
case 2146:
case 3745:
case 2734:
case 2445:
case 3742:
case 1330:
case 403:
case 1713:
case 474:
case 3408:
case 589:
case 3525:
case 2805:
case 2284:
case 3277:
case 2137:
case 841:
case 2352:
case 652:
case 2362:
case 657:
case 2926:
case 249:
case 1980:
case 2674:
case 3071:
case 457:
case 2969:
case 258:
case 1917:
case 2699:
case 3089:
case 2073:
case 3575:
case 4083:
case 3572:
case 2157:
case 2335:
case 355:
case 753:
case 4051:
case 986:
case 3208:
case 2174:
case 3187:
case 983:
case 3110:
case 764:
case 756:
case 4086:
case 1889:
case 1211:
case 3921:
case 2069:
case 1738:
case 3971:
case 1080:
case 237:
case 4031:
case 2124:
case 2026:
case 3382:
case 3296:
case 1768:
case 2518:
case 3449:
case 141:
case 2667:
case 985:
case 3989:
case 3385:
case 2997:
case 1821:
case 364:
case 1704:
case 2749:
case 930:
case 3254:
case 2143:
case 1107:
case 1832:
case 3359:
case 882:
case 2536:
case 4025:
case 1240:
case 1865:
case 2529:
case 495:
case 2566:
case 1716:
case 1628:
case 707:
case 1302:
case 3493:
case 3477:
case 4072:
case 669:
case 1305:
case 2793:
case 4075:
case 3784:
case 2594:
case 3932:
case 1855:
case 887:
case 307:
case 3962:
case 3692:
case 727:
case 2858:
case 2672:
case 634:
case 11:
case 1730:
case 209:
case 86:
case 1760:
case 2510:
case 368:
case 322:
case 3949:
case 3574:
case 3345:
case 2334:
case 3489:
case 2497:
case 1101:
case 327:
case 2838:
case 1750:
case 3723:
case 3118:
case 2354:
case 2804:
case 2721:
case 2285:
case 2622:
case 216:
case 4046:
case 3421:
case 2868:
case 722:
case 2259:
case 646:
case 3993:
case 3977:
case 1670:
case 2984:
case 2444:
case 2631:
case 3034:
case 446:
case 2276:
case 2042:
case 3432:
case 4037:
case 3633:
case 2762:
case 1512:
case 3008:
case 3462:
case 2765:
case 1515:
case 2991:
case 339:
case 2541:
case 443:
case 3166:
case 2661:
case 3452:
case 4057:
case 2239:
case 3455:
case 2752:
case 2183:
case 3179:
case 445:
case 1248:
case 739:
case 1620:
case 1280:
case 3782:
case 3934:
case 3153:
case 2592:
case 2942:
case 1368:
case 742:
case 3221:
case 3093:
case 2482:
case 1854:
case 2595:
case 1911:
case 3077:
case 2186:
case 2084:
case 2223:
case 1338:
case 550:
case 2683:
case 5:
case 3656:
case 3908:
case 347:
case 342:
case 3996:
case 3666:
case 3811:
case 3133:
case 2813:
case 2131:
case 3027:
case 110:
case 1358:
case 1170:
case 1448:
case 3391:
case 718:
case 1590:
case 266:
case 1940:
case 3567:
case 2125:
case 1480:
case 625:
case 1988:
case 3537:
case 3252:
case 1702:
case 3739:
case 263:
case 2393:
case 1705:
case 4043:
case 81:
case 3888:
case 2459:
case 3232:
case 3557:
case 2476:
case 1209:
case 426:
case 524:
case 825:
case 1815:
case 1766:
case 1812:
case 3298:
case 1272:
case 1144:
case 1046:
case 2028:
case 2390:
case 61:
case 134:
case 4040:
case 2078:
case 4088:
case 1483:
case 1577:
case 1173:
case 3328:
case 3899:
case 220:
case 3130:
case 3214:
case 37:
case 1924:
case 1231:
case 24:
case 145:
case 2568:
case 660:
case 1286:
case 2648:
case 1718:
case 1626:
case 1392:
case 1037:
case 4011:
case 460:
case 1669:
case 1549:
case 2220:
case 1999:
case 2703:
case 1067:
case 922:
case 3090:
case 968:
case 2019:
case 143:
case 58:
case 1251:
case 2538:
case 3378:
case 3602:
case 1123:
case 3150:
case 1623:
case 1139:
case 846:
case 1169:
case 2180:
case 2117:
case 3867:
case 1422:
case 2148:
case 1890:
case 284:
case 1176:
case 3307:
case 1099:
case 1472:
case 1475:
case 3588:
case 2798:
case 544:
case 1673:
case 3540:
case 598:
case 1341:
case 1967:
case 3498:
case 3660:
case 2315:
case 1697:
case 1451:
case 942:
case 2201:
case 3203:
case 1753:
case 3720:
case 1182:
case 1486:
case 1554:
case 2895:
case 2928:
case 240:
case 2978:
case 3414:
case 2470:
case 1564:
case 1431:
case 1644:
case 125:
case 2714:
case 3015:
case 2513:
case 1387:
case 2007:
case 1043:
case 401:
case 1310:
case 3511:
case 3846:
case 1534:
case 4030:
case 133:
case 824:
case 1081:
case 1677:
case 3970:
case 2914:
case 525:
case 2851:
case 3478:
case 1079:
case 1820:
case 1196:
case 136:
case 4060:
case 2886:
case 1933:
case 1056:
case 523:
case 790:
case 1108:
case 1870:
case 135:
case 4050:
case 180:
case 1287:
case 526:
case 1036:
case 1210:
case 2616:
case 3833:
case 1746:
case 1047:
case 1383:
case 3505:
case 2638:
case 3419:
case 2548:
case 70:
case 2668:
case 1526:
case 361:
case 1649:
case 2604:
case 3790:
case 578:
case 2825:
case 3207:
case 2872:
case 1576:
case 2906:
case 761:
case 2212:
case 3188:
case 1241:
case 2215:
case 388:
case 1410:
case 3228:
case 1918:
case 3560:
case 3640:
case 711:
case 1597:
case 937:
case 543:
case 18:
case 3901:
case 230:
case 108:
case 79:
case 1331:
case 3530:
case 2104:
case 311:
case 1292:
case 1801:
case 39:
case 1523:
case 1351:
case 283:
case 3278:
case 545:
case 2138:
case 3070:
case 1981:
case 2412:
case 1063:
case 880:
case 3611:
case 2014:
case 835:
case 2116:
case 3829:
case 3712:
case 1634:
case 1441:
case 1372:
case 1608:
case 1956:
case 1375:
case 1544:
case 1979:
case 471:
case 2613:
case 3836:
case 2290:
case 1325:
case 45:
case 3219:
case 1966:
case 1322:
case 833:
case 1193:
case 1053:
case 3023:
case 435:
case 2525:
case 2817:
case 1869:
case 4029:
case 1826:
case 2522:
case 680:
case 3167:
case 2848:
case 3352:
case 988:
case 3959:
case 56:
case 4036:
case 871:
case 358:
case 1740:
case 4081:
case 3699:
case 2227:
case 3969:
case 1216:
case 433:
case 1788:
case 3335:
case 3157:
case 1876:
case 4056:
case 1859:
case 4079:
case 3073:
case 2089:
case 1905:
case 2344:
case 961:
case 2052:
case 1268:
case 1882:
case 2192:
case 3553:
case 2055:
case 3754:
case 2249:
case 2496:
case 1885:
case 2323:
case 1612:
case 2035:
case 4018:
case 4047:
case 1615:
case 3389:
case 1711:
case 2434:
case 2641:
case 3764:
case 644:
case 150:
case 297:
case 3563:
case 3371:
case 2065:
case 2900:
case 3643:
case 3708:
case 1413:
case 2955:
case 202:
case 1844:
case 2376:
case 1115:
case 8:
case 2427:
case 2141:
case 329:
case 3727:
case 1416:
case 3777:
case 900:
case 3579:
case 560:
case 2583:
case 3793:
case 3085:
case 3484:
case 2493:
case 3082:
case 2326:
case 3491:
case 207:
case 2695:
case 2369:
case 3581:
case 2791:
case 3830:
case 737:
case 2208:
case 624:
case 3657:
case 1458:
case 255:
case 3059:
case 1897:
case 99:
case 2234:
case 3199:
case 3076:
case 2187:
case 3026:
case 3124:
case 51:
case 3637:
case 3069:
case 3300:
case 1501:
case 1690:
case 256:
case 591:
case 3749:
case 264:
case 3667:
case 2385:
case 3547:
case 2989:
case 1404:
case 2449:
case 3518:
case 4033:
case 1002:
case 2506:
case 1805:
case 1959:
case 1137:
case 1355:
case 3050:
case 1291:
case 2119:
case 3826:
case 3190:
case 3902:
case 3876:
case 1939:
case 1073:
case 832:
case 2980:
case 2917:
case 2488:
case 2948:
case 149:
case 1926:
case 2598:
case 3216:
case 2440:
case 7:
case 40:
case 287:
case 3238:
case 60:
case 750:
case 3268:
case 1796:
case 3885:
case 221:
case 3204:
case 3520:
case 1553:
case 1321:
case 1563:
case 350:
case 2514:
case 829:
case 461:
case 936:
case 2330:
case 933:
case 2411:
case 1533:
case 1445:
case 1146:
case 2360:
case 2009:
case 1044:
case 2128:
case 1442:
case 2716:
case 1646:
case 2288:
case 69:
case 3112:
case 49:
case 2832:
case 611:
case 2107:
case 3348:
case 3380:
case 1581:
case 3317:
case 1085:
case 1579:
case 1944:
case 2909:
case 2855:
case 1777:
case 2852:
case 1484:
case 4020:
case 3897:
case 581:
case 1242:
case 1174:
case 1199:
case 771:
case 1830:
case 2871:
case 35:
case 1657:
case 3950:
case 2503:
case 1973:
case 1667:
case 98:
case 3960:
case 3005:
case 2619:
case 1749:
case 2704:
case 522:
case 1997:
case 908:
case 1039:
case 241:
case 3404:
case 2768:
case 3438:
case 600:
case 1069:
case 1300:
case 2017:
case 1850:
case 137:
case 3820:
case 4073:
case 2083:
case 3492:
case 2347:
case 3933:
case 3154:
case 2792:
case 9:
case 3582:
case 780:
case 658:
case 333:
case 257:
case 570:
case 190:
case 3693:
case 2224:
case 3081:
case 3677:
case 1970:
case 3963:
case 3627:
case 1920:
case 3953:
case 3134:
case 252:
case 1428:
case 3287:
case 736:
case 1833:
case 3746:
case 1111:
case 380:
case 2814:
case 800:
case 733:
case 1863:
case 3108:
case 3870:
case 3526:
case 1419:
case 344:
case 398:
case 3569:
case 1001:
case 3383:
case 2437:
case 811:
case 2356:
case 3737:
case 2898:
case 219:
case 1188:
case 744:
case 3559:
case 2457:
case 1314:
case 971:
case 2571:
case 1901:
case 888:
case 1530:
case 3331:
case 3487:
case 1228:
case 1688:
case 2246:
case 2072:
case 551:
case 4085:
case 3774:
case 2787:
case 3573:
case 2589:
case 269:
case 1560:
case 3523:
case 1550:
case 295:
case 19:
case 2022:
case 2424:
case 1278:
case 78:
case 3292:
case 1818:
case 3386:
case 111:
case 2521:
case 3295:
case 95:
case 2803:
case 3956:
case 3033:
case 2443:
case 1407:
case 4039:
case 3372:
case 2257:
case 1836:
case 3743:
case 2061:
case 3375:
case 2983:
case 1829:
case 238:
case 100:
case 4069:
case 2645:
case 1715:
case 1070:
case 3981:
case 2031:
case 1398:
case 3441:
case 724:
case 2642:
case 1712:
case 637:
case 2237:
case 1856:
case 4076:
case 2552:
case 3193:
case 2184:
case 3177:
case 1306:
case 1020:
case 2555:
case 1894:
case 1879:
case 1219:
case 3654:
case 3325:
case 2267:
case 890:
case 3696:
case 3966:
case 2436:
case 2135:
case 481:
case 2357:
case 3736:
case 1843:
case 2807:
case 228:
case 3527:
case 2162:
case 262:
case 3812:
case 1298:
case 627:
case 2429:
case 3483:
case 2479:
case 2092:
case 668:
case 2152:
case 267:
case 2783:
case 3794:
case 2456:
case 2584:
case 2591:
case 1915:
case 1319:
case 3781:
case 3685:
case 2941:
case 500:
case 1912:
case 3222:
case 3682:
case 275:
case 3659:
case 1214:
case 17:
case 743:
case 345:
case 3676:
case 2171:
case 3197:
case 2233:
case 511:
case 2346:
case 2189:
case 1899:
case 4054:
case 3261:
case 746:
case 1874:
case 1701:
case 343:
case 3251:
case 1824:
case 3067:
case 1605:
case 3639:
case 1150:
case 639:
case 3123:
case 4008:
case 1378:
case 2447:
case 3037:
case 3626:
case 2121:
case 4034:
case 3395:
case 151:
case 3974:
case 276:
case 3169:
case 50:
case 3024:
case 2281:
case 4027:
case 3422:
case 2725:
case 1867:
case 3957:
case 3139:
case 1650:
case 2294:
case 851:
case 2279:
case 642:
case 3283:
case 2256:
case 442:
case 1105:
case 248:
case 1588:
case 2229:
case 3697:
case 3341:
case 259:
case 1498:
case 1660:
case 3673:
case 378:
case 4077:
case 2236:
case 1857:
case 2343:
case 1307:
case 4093:
case 2087:
case 3475:
case 2772:
case 3937:
case 3159:
case 3554:
case 910:
case 2786:
case 3185:
case 2453:
case 323:
case 725:
case 2878:
case 2100:
case 2655:
case 2324:
case 618:
case 2995:
case 1511:
case 2399:
case 3310:
case 2545:
case 2374:
case 3534:
case 2828:
case 3733:
case 1846:
case 2542:
case 212:
case 1012:
case 2635:
case 2731:
case 1770:
case 3763:
case 3431:
case 325:
case 590:
case 2904:
case 1949:
case 391:
case 1574:
case 122:
case 1797:
case 3760:
case 1489:
case 2698:
case 31:
case 946:
case 3088:
case 3040:
case 2938:
case 3313:
case 3849:
case 1118:
case 1421:
case 2103:
case 945:
case 2606:
case 1723:
case 1200:
case 71:
case 1008:
case 1129:
case 1465:
case 1633:
case 1064:
case 2340:
case 1166:
case 139:
case 1663:
case 3670:
case 451:
case 1993:
case 1744:
case 2614:
case 842:
case 3409:
case 3248:
case 67:
case 2916:
case 1653:
case 1927:
case 3620:
case 529:
case 2884:
case 3877:
case 1452:
case 2205:
case 1054:
case 1156:
case 1179:
case 1455:
case 2202:
case 1964:
case 2913:
case 710:
case 2250:
case 3338:
case 1694:
case 2578:
case 1400:
case 1656:
case 3368:
case 1934:
case 1681:
case 925:
case 3854:
case 3864:
case 1271:
case 839:
case 3808:
case 2016:
case 2230:
case 2114:
case 310:
case 2842:
case 2528:
case 2845:
case 2260:
case 1289:
case 1811:
case 1954:
case 2068:
case 1739:
case 2405:
case 1537:
case 1384:
case 978:
case 301:
case 3601:
case 2106:
case 1049:
case 1255:
case 881:
case 2402:
case 1567:
case 3940:
case 2603:
case 2717:
case 3590:
case 3448:
case 2780:
case 549:
case 3988:
case 3480:
case 701:
case 1235:
case 1759:
case 36:
case 822:
case 1232:
case 1265:
case 1840:
case 2198:
case 118:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759172402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,];
var gg_b = "1759172402/";

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
