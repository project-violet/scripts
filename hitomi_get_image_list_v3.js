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
case 716:
case 2126:
case 1076:
case 1917:
case 3776:
case 237:
case 767:
case 1933:
case 1778:
case 3813:
case 1283:
case 492:
case 102:
case 736:
case 2760:
case 2467:
case 1609:
case 2857:
case 3724:
case 291:
case 3319:
case 1539:
case 2174:
case 3931:
case 872:
case 1811:
case 3281:
case 1715:
case 3015:
case 3250:
case 1377:
case 2027:
case 459:
case 2980:
case 154:
case 1177:
case 2896:
case 185:
case 3573:
case 146:
case 3119:
case 2341:
case 2409:
case 550:
case 2235:
case 2985:
case 3522:
case 3223:
case 2188:
case 1433:
case 178:
case 3104:
case 1651:
case 784:
case 2414:
case 1964:
case 4064:
case 3479:
case 3304:
case 1246:
case 3299:
case 1710:
case 1417:
case 330:
case 3042:
case 2861:
case 2633:
case 2706:
case 2451:
case 2480:
case 3431:
case 3653:
case 310:
case 3084:
case 2617:
case 2330:
case 773:
case 2241:
case 3636:
case 169:
case 1889:
case 3940:
case 464:
case 1790:
case 3381:
case 1638:
case 3172:
case 3350:
case 2722:
case 3868:
case 972:
case 1383:
case 3458:
case 11:
case 2226:
case 249:
case 3001:
case 1866:
case 2697:
case 3587:
case 227:
case 2082:
case 3560:
case 1321:
case 79:
case 910:
case 1997:
case 252:
case 320:
case 2044:
case 1121:
case 3893:
case 2773:
case 1759:
case 2288:
case 3123:
case 3095:
case 1527:
case 4056:
case 1956:
case 2302:
case 3399:
case 820:
case 2816:
case 3155:
case 2102:
case 3199:
case 451:
case 3323:
case 2039:
case 3958:
case 908:
case 1788:
case 2295:
case 218:
case 51:
case 1273:
case 2004:
case 85:
case 2259:
case 1493:
case 324:
case 1572:
case 2475:
case 1550:
case 1618:
case 3786:
case 3707:
case 1007:
case 53:
case 3989:
case 768:
case 1840:
case 3932:
case 3282:
case 1812:
case 2970:
case 61:
case 2693:
case 3583:
case 1968:
case 2142:
case 4068:
case 200:
case 3108:
case 824:
case 2629:
case 1365:
case 1387:
case 1306:
case 35:
case 63:
case 3271:
case 3897:
case 4029:
case 1652:
case 3489:
case 1360:
case 460:
case 3521:
case 1160:
case 4093:
case 3743:
case 2668:
case 1043:
case 2975:
case 177:
case 2178:
case 307:
case 1670:
case 986:
case 1028:
case 3466:
case 2862:
case 2115:
case 3405:
case 2452:
case 1599:
case 3856:
case 3546:
case 2918:
case 3041:
case 3074:
case 1845:
case 1741:
case 1774:
case 453:
case 1858:
case 1468:
case 1523:
case 2019:
case 3432:
case 3127:
case 2470:
case 2315:
case 2777:
case 95:
case 3182:
case 3371:
case 2543:
case 1937:
case 780:
case 585:
case 3171:
case 3382:
case 2825:
case 2284:
case 3833:
case 3208:
case 3661:
case 2998:
case 3911:
case 2048:
case 3577:
case 1831:
case 1735:
case 52:
case 1173:
case 293:
case 2159:
case 2195:
case 1519:
case 2023:
case 1373:
case 2746:
case 2359:
case 395:
case 2949:
case 654:
case 502:
case 924:
case 1413:
case 779:
case 2390:
case 2050:
case 2215:
case 1322:
case 2507:
case 2586:
case 661:
case 1122:
case 845:
case 3864:
case 2963:
case 2449:
case 578:
case 27:
case 2820:
case 150:
case 2569:
case 696:
case 2783:
case 243:
case 2637:
case 2278:
case 2101:
case 2498:
case 1260:
case 3462:
case 23:
case 782:
case 1697:
case 2456:
case 2805:
case 2701:
case 3243:
case 127:
case 3542:
case 456:
case 1438:
case 3228:
case 2183:
case 3584:
case 2694:
case 2508:
case 21:
case 3436:
case 2832:
case 1226:
case 858:
case 518:
case 3870:
case 2790:
case 739:
case 2497:
case 2889:
case 638:
case 983:
case 3022:
case 2638:
case 3645:
case 2277:
case 1494:
case 719:
case 2003:
case 618:
case 3936:
case 3207:
case 1102:
case 1039:
case 2146:
case 3818:
case 2346:
case 2759:
case 3073:
case 4038:
case 3962:
case 3640:
case 409:
case 3612:
case 2121:
case 1044:
case 3771:
case 2047:
case 4080:
case 2177:
case 1374:
case 1409:
case 1896:
case 3559:
case 2539:
case 1174:
case 729:
case 191:
case 693:
case 2811:
case 2715:
case 1664:
case 1914:
case 4014:
case 202:
case 1547:
case 2778:
case 166:
case 2609:
case 1485:
case 3692:
case 3925:
case 1467:
case 2076:
case 528:
case 2571:
case 22:
case 2544:
case 1126:
case 3953:
case 2854:
case 2464:
case 2221:
case 2784:
case 141:
case 3169:
case 1909:
case 296:
case 1787:
case 2614:
case 1765:
case 48:
case 3065:
case 3920:
case 1633:
case 2246:
case 1503:
case 425:
case 3107:
case 731:
case 1202:
case 974:
case 543:
case 711:
case 3425:
case 1235:
case 2680:
case 1414:
case 1188:
case 2433:
case 278:
case 566:
case 1746:
case 1359:
case 3461:
case 3880:
case 517:
case 857:
case 3851:
case 1949:
case 3755:
case 2663:
case 1048:
case 2735:
case 3748:
case 537:
case 2519:
case 1023:
case 2173:
case 691:
case 403:
case 1159:
case 1721:
case 666:
case 3957:
case 4034:
case 1284:
case 3814:
case 617:
case 1463:
case 970:
case 1242:
case 3147:
case 357:
case 637:
case 2879:
case 2265:
case 2937:
case 1637:
case 865:
case 3083:
case 322:
case 641:
case 1783:
case 2260:
case 1101:
case 3654:
case 1498:
case 2634:
case 17:
case 3961:
case 1820:
case 1449:
case 1613:
case 1301:
case 2892:
case 3496:
case 3809:
case 1569:
case 2122:
case 733:
case 4063:
case 3303:
case 2698:
case 3588:
case 2413:
case 3867:
case 713:
case 1586:
case 1507:
case 3457:
case 1050:
case 3781:
case 822:
case 1215:
case 3885:
case 100:
case 2069:
case 4052:
case 1629:
case 649:
case 3416:
case 2968:
case 1142:
case 527:
case 2007:
case 2086:
case 2618:
case 2840:
case 981:
case 138:
case 3704:
case 1295:
case 118:
case 1475:
case 3530:
case 1310:
case 870:
case 3719:
case 1019:
case 2523:
case 1290:
case 2858:
case 3324:
case 3916:
case 3535:
case 2548:
case 1777:
case 2222:
case 1115:
case 812:
case 2599:
case 389:
case 2555:
case 699:
case 1862:
case 2845:
case 2741:
case 4018:
case 440:
case 1201:
case 3376:
case 4075:
case 1668:
case 2670:
case 312:
case 889:
case 277:
case 3632:
case 1178:
case 332:
case 652:
case 504:
case 599:
case 3666:
case 2929:
case 2726:
case 2621:
case 3499:
case 3865:
case 2402:
case 3448:
case 1532:
case 1808:
case 1233:
case 1983:
case 465:
case 1421:
case 3950:
case 2646:
case 1602:
case 1763:
case 2930:
case 2251:
case 2280:
case 3972:
case 2824:
case 1630:
case 3923:
case 303:
case 3145:
case 671:
case 1483:
case 2935:
case 2011:
case 219:
case 1798:
case 769:
case 239:
case 3955:
case 2902:
case 1096:
case 3158:
case 205:
case 3796:
case 1264:
case 3345:
case 1946:
case 1591:
case 2338:
case 4046:
case 2737:
case 2430:
case 3292:
case 126:
case 457:
case 2054:
case 26:
case 1734:
case 1397:
case 3034:
case 73:
case 3529:
case 282:
case 4021:
case 1921:
case 3481:
case 3757:
case 3450:
case 1057:
case 3686:
case 3607:
case 2974:
case 155:
case 2091:
case 3018:
case 1718:
case 2351:
case 778:
case 679:
case 4077:
case 2151:
case 3716:
case 1688:
case 761:
case 3919:
case 1839:
case 231:
case 3669:
case 796:
case 2557:
case 2847:
case 2314:
case 2729:
case 3513:
case 3404:
case 2488:
case 1133:
case 1775:
case 1317:
case 3537:
case 3075:
case 840:
case 72:
case 116:
case 2768:
case 1297:
case 1770:
case 2:
case 3052:
case 2561:
case 680:
case 2309:
case 1626:
case 470:
case 2185:
case 890:
case 2167:
case 2238:
case 2803:
case 3904:
case 2677:
case 247:
case 1364:
case 2988:
case 1164:
case 1641:
case 1674:
case 746:
case 3822:
case 2426:
case 3762:
case 474:
case 394:
case 179:
case 684:
case 2756:
case 3111:
case 309:
case 2198:
case 2622:
case 925:
case 2959:
case 213:
case 4073:
case 3939:
case 315:
case 2058:
case 233:
case 3736:
case 2149:
case 3877:
case 2398:
case 3603:
case 1531:
case 2334:
case 1313:
case 3533:
case 555:
case 1422:
case 750:
case 815:
case 2270:
case 3982:
case 2525:
case 1337:
case 98:
case 1794:
case 3266:
case 3971:
case 3205:
case 2553:
case 2134:
case 3354:
case 1113:
case 2012:
case 667:
case 616:
case 180:
case 356:
case 2869:
case 3647:
case 2363:
case 3564:
case 1804:
case 516:
case 856:
case 3444:
case 1695:
case 1922:
case 4022:
case 1659:
case 2886:
case 2990:
case 458:
case 69:
case 2170:
case 2352:
case 1987:
case 4006:
case 4087:
case 1237:
case 825:
case 1965:
case 38:
case 3366:
case 3427:
case 1678:
case 3132:
case 3254:
case 276:
case 3009:
case 1168:
case 1368:
case 2984:
case 2370:
case 2415:
case 2152:
case 3166:
case 223:
case 3389:
case 298:
case 1540:
case 3085:
case 1881:
case 3211:
case 2298:
case 3067:
case 1767:
case 2249:
case 909:
case 1872:
case 3624:
case 3189:
case 935:
case 88:
case 2536:
case 526:
case 2031:
case 2484:
case 483:
case 1558:
case 3408:
case 171:
case 673:
case 1823:
case 2118:
case 3391:
case 1751:
case 3080:
case 1855:
case 64:
case 1780:
case 1465:
case 3927:
case 3556:
case 3753:
case 2079:
case 1129:
case 956:
case 626:
case 2375:
case 3100:
case 2717:
case 1393:
case 944:
case 2175:
case 1642:
case 1960:
case 1025:
case 801:
case 2687:
case 3597:
case 54:
case 1714:
case 2665:
case 197:
case 2133:
case 407:
case 3928:
case 533:
case 2775:
case 2871:
case 2844:
case 2317:
case 3943:
case 853:
case 4026:
case 513:
case 360:
case 2882:
case 3407:
case 2117:
case 3029:
case 1314:
case 3153:
case 2511:
case 2016:
case 1180:
case 131:
case 353:
case 988:
case 3469:
case 1091:
case 111:
case 613:
case 2718:
case 3895:
case 4041:
case 1974:
case 255:
case 1941:
case 4074:
case 1596:
case 284:
case 2164:
case 1426:
case 2674:
case 3907:
case 3986:
case 2641:
case 424:
case 147:
case 975:
case 1988:
case 1238:
case 3428:
case 1066:
case 3766:
case 717:
case 45:
case 3705:
case 3801:
case 766:
case 2626:
case 3969:
case 236:
case 216:
case 3068:
case 1768:
case 1:
case 1032:
case 3732:
case 737:
case 2770:
case 2763:
case 3648:
case 3810:
case 1280:
case 4030:
case 3623:
case 1646:
case 3655:
case 704:
case 698:
case 2589:
case 121:
case 388:
case 953:
case 2532:
case 3225:
case 1435:
case 3570:
case 2983:
case 3884:
case 3253:
case 2446:
case 1621:
case 676:
case 445:
case 598:
case 2566:
case 752:
case 1402:
case 3552:
case 2505:
case 2061:
case 523:
case 29:
case 648:
case 182:
case 3013:
case 3878:
case 16:
case 2397:
case 727:
case 1683:
case 875:
case 3037:
case 226:
case 2356:
case 2749:
case 1902:
case 139:
case 4002:
case 548:
case 3362:
case 3681:
case 2946:
case 2591:
case 105:
case 2096:
case 375:
case 273:
case 119:
case 1011:
case 2156:
case 3711:
case 1285:
case 3815:
case 1516:
case 1935:
case 3336:
case 4035:
case 3162:
case 1267:
case 1249:
case 3476:
case 4010:
case 806:
case 1764:
case 2615:
case 408:
case 198:
case 951:
case 123:
case 2460:
case 2850:
case 1298:
case 1234:
case 410:
case 2213:
case 2512:
case 842:
case 1415:
case 1370:
case 1152:
case 2678:
case 2965:
case 521:
case 2987:
case 3792:
case 1092:
case 2709:
case 1942:
case 2168:
case 4042:
case 306:
case 2193:
case 2960:
case 2025:
case 1175:
case 700:
case 1978:
case 682:
case 539:
case 2329:
case 1665:
case 3033:
case 1733:
case 472:
case 1687:
case 2714:
case 66:
case 3779:
case 2053:
case 1079:
case 2393:
case 3608:
case 3261:
case 1375:
case 3976:
case 3017:
case 2684:
case 3594:
case 1410:
case 1717:
case 2545:
case 2465:
case 639:
case 268:
case 582:
case 359:
case 56:
case 2855:
case 2406:
case 2487:
case 2780:
case 3116:
case 3731:
case 2848:
case 1031:
case 1915:
case 3316:
case 4015:
case 271:
case 3924:
case 964:
case 1118:
case 1484:
case 2558:
case 531:
case 697:
case 1828:
case 2113:
case 906:
case 1553:
case 2579:
case 420:
case 1334:
case 1490:
case 3357:
case 1270:
case 2422:
case 1149:
case 2531:
case 1398:
case 597:
case 2036:
case 279:
case 3056:
case 3580:
case 2062:
case 887:
case 4059:
case 1959:
case 2973:
case 113:
case 611:
case 1622:
case 4095:
case 1995:
case 3396:
case 3567:
case 1807:
case 2695:
case 3585:
case 2922:
case 3740:
case 1040:
case 364:
case 1163:
case 1990:
case 4090:
case 3903:
case 5:
case 647:
case 2804:
case 1363:
case 1218:
case 3888:
case 793:
case 629:
case 2473:
case 2592:
case 1495:
case 1275:
case 4001:
case 2293:
case 1012:
case 6:
case 864:
case 3161:
case 992:
case 3644:
case 529:
case 134:
case 572:
case 2799:
case 2461:
case 439:
case 2851:
case 2755:
case 2541:
case 2996:
case 2574:
case 195:
case 1139:
case 2046:
case 1339:
case 281:
case 3173:
case 114:
case 1577:
case 3831:
case 3735:
case 4011:
case 1911:
case 46:
case 1208:
case 2814:
case 482:
case 2347:
case 3913:
case 2021:
case 2526:
case 756:
case 1144:
case 2957:
case 4054:
case 257:
case 1954:
case 3260:
case 222:
case 610:
case 2496:
case 977:
case 145:
case 3892:
case 1657:
case 186:
case 2961:
case 3634:
case 20:
case 508:
case 3504:
case 2588:
case 3698:
case 2303:
case 3122:
case 1227:
case 363:
case 2867:
case 3322:
case 2781:
case 2457:
case 2750:
case 3649:
case 794:
case 608:
case 1905:
case 15:
case 1271:
case 1244:
case 3365:
case 3069:
case 3675:
case 2247:
case 1583:
case 3106:
case 3187:
case 2416:
case 3165:
case 4:
case 3429:
case 1786:
case 1707:
case 3007:
case 3550:
case 3581:
case 429:
case 2530:
case 124:
case 2704:
case 447:
case 1088:
case 2916:
case 2077:
case 2535:
case 520:
case 725:
case 1127:
case 3523:
case 3858:
case 3845:
case 3741:
case 2203:
case 2838:
case 3774:
case 1546:
case 1991:
case 411:
case 2124:
case 963:
case 1856:
case 2689:
case 877:
case 2502:
case 1466:
case 3670:
case 620:
case 3028:
case 377:
case 1743:
case 2376:
case 3160:
case 3993:
case 1521:
case 2176:
case 3360:
case 232:
case 78:
case 1897:
case 762:
case 3929:
case 1445:
case 3183:
case 65:
case 3866:
case 33:
case 2462:
case 1506:
case 3701:
case 2852:
case 1001:
case 1565:
case 3832:
case 31:
case 4012:
case 1458:
case 3694:
case 524:
case 902:
case 3277:
case 1662:
case 3497:
case 1090:
case 55:
case 4040:
case 1940:
case 985:
case 703:
case 954:
case 1323:
case 978:
case 2739:
case 4058:
case 1199:
case 1412:
case 2286:
case 1155:
case 507:
case 274:
case 961:
case 2962:
case 3527:
case 3956:
case 3891:
case 3795:
case 1059:
case 1204:
case 3346:
case 3759:
case 1945:
case 413:
case 3121:
case 1893:
case 0:
case 2269:
case 120:
case 2612:
case 3997:
case 1829:
case 3047:
case 1440:
case 3321:
case 2782:
case 346:
case 2595:
case 3685:
case 695:
case 385:
case 1573:
case 634:
case 2420:
case 3811:
case 1015:
case 614:
case 802:
case 3377:
case 1931:
case 1319:
case 3539:
case 969:
case 1724:
case 595:
case 790:
case 3609:
case 91:
case 534:
case 302:
case 3933:
case 1078:
case 3778:
case 2953:
case 1979:
case 3854:
case 4079:
case 846:
case 2343:
case 1837:
case 1084:
case 2708:
case 110:
case 2679:
case 1653:
case 2920:
case 2501:
case 476:
case 396:
case 1042:
case 686:
case 2369:
case 1625:
case 861:
case 130:
case 1992:
case 2107:
case 1299:
case 1304:
case 2453:
case 3964:
case 2631:
case 2863:
case 2307:
case 2386:
case 1522:
case 545:
case 1248:
case 3475:
case 3310:
case 3295:
case 3259:
case 2616:
case 928:
case 2239:
case 2989:
case 759:
case 3110:
case 2707:
case 2400:
case 2583:
case 3142:
case 467:
case 1416:
case 3970:
case 792:
case 2905:
case 25:
case 2769:
case 3418:
case 1600:
case 2026:
case 706:
case 2897:
case 1666:
case 132:
case 574:
case 3178:
case 1632:
case 97:
case 3201:
case 2546:
case 2991:
case 2041:
case 1838:
case 1502:
case 3862:
case 2466:
case 2405:
case 3452:
case 674:
case 2432:
case 2127:
case 1535:
case 3470:
case 4016:
case 1719:
case 3019:
case 2371:
case 2182:
case 583:
case 3543:
case 1147:
case 3528:
case 3284:
case 2833:
case 3934:
case 1526:
case 2171:
case 3721:
case 828:
case 393:
case 3159:
case 3195:
case 181:
case 683:
case 2339:
case 2911:
case 3998:
case 2035:
case 1748:
case 2002:
case 1880:
case 764:
case 1755:
case 44:
case 234:
case 1461:
case 1046:
case 3746:
case 1541:
case 3395:
case 918:
case 1457:
case 843:
case 1750:
case 1867:
case 2696:
case 3434:
case 1224:
case 1303:
case 2864:
case 3190:
case 3963:
case 2227:
case 2657:
case 3569:
case 286:
case 245:
case 1496:
case 3449:
case 3613:
case 3301:
case 3820:
case 1654:
case 787:
case 1083:
case 343:
case 337:
case 4053:
case 1328:
case 3126:
case 2776:
case 949:
case 581:
case 1692:
case 3760:
case 3326:
case 4025:
case 1143:
case 3547:
case 3914:
case 557:
case 2281:
case 1898:
case 2015:
case 391:
case 183:
case 681:
case 2573:
case 2119:
case 3374:
case 1595:
case 3341:
case 3027:
case 468:
case 3230:
case 2272:
case 3414:
case 1590:
case 50:
case 1425:
case 3967:
case 3235:
case 1307:
case 1107:
case 753:
case 999:
case 2010:
case 2255:
case 3503:
case 3388:
case 1863:
case 3861:
case 3765:
case 4020:
case 1920:
case 1501:
case 3633:
case 3706:
case 1006:
case 1087:
case 1369:
case 2992:
case 230:
case 3909:
case 2042:
case 760:
case 622:
case 3008:
case 3617:
case 2431:
case 2703:
case 3274:
case 2372:
case 827:
case 3330:
case 2172:
case 570:
case 2350:
case 3722:
case 2219:
case 991:
case 966:
case 1436:
case 3226:
case 2868:
case 3438:
case 1228:
case 480:
case 1542:
case 937:
case 1243:
case 1852:
case 2001:
case 2565:
case 2506:
case 3697:
case 1578:
case 2747:
case 632:
case 352:
case 589:
case 2829:
case 941:
case 1782:
case 3576:
case 1612:
case 899:
case 804:
case 479:
case 3302:
case 689:
case 532:
case 3135:
case 304:
case 2204:
case 2059:
case 1073:
case 2945:
case 3288:
case 1207:
case 2412:
case 2155:
case 2199:
case 1515:
case 1936:
case 852:
case 3335:
case 2348:
case 2064:
case 2296:
case 3615:
case 1189:
case 1624:
case 3872:
case 1067:
case 3767:
case 3850:
case 3881:
case 3785:
case 2627:
case 242:
case 3512:
case 1166:
case 441:
case 1908:
case 3213:
case 1883:
case 3168:
case 3237:
case 1720:
case 1427:
case 1132:
case 3678:
case 3906:
case 3329:
case 2033:
case 1014:
case 3714:
case 3193:
case 1821:
case 3642:
case 466:
case 1300:
case 2608:
case 3393:
case 2594:
case 437:
case 3129:
case 868:
case 3053:
case 1927:
case 368:
case 259:
case 3899:
case 3406:
case 3487:
case 3751:
case 2802:
case 1080:
case 2116:
case 3780:
case 1051:
case 1391:
case 3545:
case 2538:
case 1408:
case 2924:
case 3823:
case 491:
case 101:
case 1191:
case 3558:
case 2731:
case 2835:
case 879:
case 1354:
case 1944:
case 4071:
case 2157:
case 1971:
case 4044:
case 1094:
case 3337:
case 1517:
case 1982:
case 540:
case 786:
case 1232:
case 3313:
case 1154:
case 1533:
case 2514:
case 1877:
case 1603:
case 3531:
case 1736:
case 3036:
case 1289:
case 3819:
case 251:
case 2758:
case 115:
case 2196:
case 2841:
case 3738:
case 2874:
case 1111:
case 109:
case 499:
case 2580:
case 3690:
case 1762:
case 194:
case 2447:
case 2567:
case 2216:
case 1482:
case 3922:
case 1444:
case 880:
case 1564:
case 714:
case 1647:
case 3473:
case 690:
case 3592:
case 2682:
case 156:
case 1439:
case 2712:
case 2161:
case 2125:
case 2093:
case 3844:
case 3775:
case 3871:
case 515:
case 2943:
case 1537:
case 710:
case 1075:
case 3554:
case 2928:
case 3333:
case 1513:
case 2029:
case 1179:
case 2534:
case 2153:
case 2407:
case 1212:
case 730:
case 3117:
case 2700:
case 615:
case 3016:
case 3977:
case 1131:
case 2549:
case 694:
case 2469:
case 2791:
case 3718:
case 2859:
case 1607:
case 355:
case 2236:
case 816:
case 2907:
case 556:
case 3674:
case 2890:
case 3164:
case 973:
case 544:
case 2789:
case 3364:
case 418:
case 1904:
case 2563:
case 2262:
case 94:
case 836:
case 2619:
case 400:
case 1392:
case 926:
case 2320:
case 1052:
case 2705:
case 2801:
case 2120:
case 367:
case 2732:
case 3770:
case 3477:
case 1628:
case 1192:
case 3297:
case 1419:
case 2623:
case 984:
case 625:
case 955:
case 2648:
case 3635:
case 1063:
case 3602:
case 562:
case 3589:
case 2699:
case 4050:
case 1231:
case 3983:
case 1423:
case 1568:
case 720:
case 525:
case 2570:
case 1448:
case 3566:
case 3217:
case 1455:
case 3061:
case 3505:
case 1499:
case 47:
case 39:
case 1279:
case 1757:
case 1450:
case 3921:
case 3500:
case 1860:
case 916:
case 2013:
case 1529:
case 3734:
case 2878:
case 3397:
case 1472:
case 501:
case 2220:
case 2037:
case 2575:
case 2681:
case 3946:
case 3591:
case 2518:
case 1158:
case 1796:
case 275:
case 826:
case 3356:
case 1049:
case 3827:
case 1999:
case 3156:
case 1098:
case 3798:
case 2815:
case 1948:
case 2162:
case 4048:
case 2336:
case 493:
case 1145:
case 103:
case 373:
case 1358:
case 428:
case 1923:
case 3622:
case 1874:
case 1745:
case 1841:
case 3959:
case 765:
case 560:
case 2038:
case 313:
case 1551:
case 294:
case 3198:
case 2111:
case 3149:
case 2603:
case 2939:
case 1196:
case 998:
case 923:
case 333:
case 653:
case 2289:
case 2232:
case 2982:
case 3270:
case 1357:
case 1514:
case 2533:
case 2154:
case 70:
case 187:
case 2354:
case 976:
case 1403:
case 2094:
case 553:
case 2205:
case 3843:
case 2439:
case 1644:
case 757:
case 2200:
case 3012:
case 244:
case 3275:
case 3520:
case 3901:
case 3495:
case 256:
case 1682:
case 3459:
case 1639:
case 2471:
case 1903:
case 164:
case 3990:
case 469:
case 1447:
case 1567:
case 3807:
case 2009:
case 376:
case 2254:
case 496:
case 106:
case 1792:
case 2305:
case 3415:
case 3370:
case 1257:
case 3152:
case 823:
case 712:
case 2332:
case 1424:
case 2085:
case 3298:
case 688:
case 398:
case 3478:
case 789:
case 913:
case 1064:
case 1296:
case 225:
case 876:
case 3249:
case 3910:
case 1830:
case 1924:
case 2408:
case 4024:
case 2191:
case 201:
case 1731:
case 1802:
case 3562:
case 454:
case 1116:
case 2927:
case 2556:
case 159:
case 446:
case 3442:
case 3263:
case 3318:
case 1538:
case 1017:
case 1594:
case 4076:
case 3717:
case 2100:
case 1608:
case 42:
case 1261:
case 1779:
case 3079:
case 2753:
case 2597:
case 3687:
case 192:
case 402:
case 3665:
case 1033:
case 3733:
case 3175:
case 770:
case 575:
case 2821:
case 1552:
case 542:
case 2865:
case 2112:
case 3402:
case 2455:
case 2806:
case 997:
case 3621:
case 450:
case 1253:
case 2423:
case 2568:
case 821:
case 1225:
case 2312:
case 1699:
case 188:
case 931:
case 2981:
case 2972:
case 463:
case 2063:
case 911:
case 1336:
case 2948:
case 1162:
case 3267:
case 3011:
case 2098:
case 3285:
case 3824:
case 2923:
case 1672:
case 3138:
case 305:
case 2158:
case 175:
case 947:
case 2796:
case 3338:
case 2345:
case 1136:
case 758:
case 3902:
case 659:
case 2049:
case 1754:
case 839:
case 3054:
case 3209:
case 1220:
case 1037:
case 3394:
case 3683:
case 9:
case 2860:
case 3194:
case 2481:
case 2450:
case 1878:
case 819:
case 559:
case 1013:
case 2529:
case 3380:
case 2131:
case 1549:
case 2607:
case 3596:
case 1469:
case 2018:
case 311:
case 3091:
case 240:
case 2919:
case 153:
case 1604:
case 3151:
case 2716:
case 1153:
case 1534:
case 3729:
case 1029:
case 2513:
case 3000:
case 2212:
case 831:
case 2669:
case 3557:
case 160:
case 1943:
case 2075:
case 4043:
case 3793:
case 1125:
case 811:
case 551:
case 687:
case 1928:
case 1353:
case 3114:
case 397:
case 2628:
case 2070:
case 1120:
case 1732:
case 2419:
case 1068:
case 3768:
case 2192:
case 829:
case 3309:
case 3474:
case 3441:
case 2392:
case 290:
case 4069:
case 564:
case 3005:
case 3066:
case 1320:
case 3294:
case 1766:
case 2245:
case 3803:
case 3238:
case 347:
case 3988:
case 905:
case 329:
case 1443:
case 1619:
case 3185:
case 783:
case 3167:
case 1986:
case 3426:
case 3089:
case 1789:
case 8:
case 2258:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1770364801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,];
var gg_b = "1770364801/";

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
