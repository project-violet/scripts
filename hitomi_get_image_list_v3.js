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
case 1448:
case 717:
case 2522:
case 2732:
case 1544:
case 709:
case 1645:
case 3014:
case 685:
case 3208:
case 3156:
case 3199:
case 1500:
case 813:
case 3317:
case 2335:
case 1817:
case 1729:
case 96:
case 1064:
case 3465:
case 1002:
case 2243:
case 3668:
case 603:
case 1297:
case 1367:
case 2966:
case 1913:
case 2454:
case 1928:
case 2153:
case 433:
case 1185:
case 3083:
case 805:
case 2765:
case 4086:
case 1885:
case 1269:
case 3036:
case 2391:
case 3990:
case 1527:
case 1737:
case 1399:
case 2957:
case 3754:
case 883:
case 3219:
case 3432:
case 2033:
case 3581:
case 3941:
case 2304:
case 624:
case 222:
case 890:
case 1487:
case 4020:
case 1470:
case 3167:
case 2812:
case 2292:
case 2340:
case 787:
case 3274:
case 1926:
case 1395:
case 3373:
case 2881:
case 1060:
case 500:
case 2237:
case 1761:
case 1889:
case 922:
case 1042:
case 2769:
case 3666:
case 4047:
case 3512:
case 2203:
case 3711:
case 1792:
case 3389:
case 595:
case 1562:
case 1408:
case 172:
case 3895:
case 1616:
case 1873:
case 4024:
case 2411:
case 1578:
case 3195:
case 1474:
case 2641:
case 1173:
case 762:
case 2300:
case 1322:
case 3901:
case 3287:
case 858:
case 894:
case 1232:
case 1419:
case 1649:
case 1189:
case 3038:
case 2797:
case 2181:
case 791:
case 389:
case 3750:
case 976:
case 321:
case 2972:
case 8:
case 589:
case 167:
case 675:
case 286:
case 2832:
case 3597:
case 829:
case 2013:
case 3412:
case 1066:
case 627:
case 3200:
case 3154:
case 416:
case 2052:
case 2084:
case 1610:
case 928:
case 3016:
case 3005:
case 1546:
case 2370:
case 143:
case 4028:
case 1574:
case 431:
case 2511:
case 714:
case 3693:
case 1675:
case 2753:
case 3854:
case 2348:
case 725:
case 3049:
case 1281:
case 61:
case 1907:
case 1519:
case 2315:
case 395:
case 3799:
case 2467:
case 811:
case 3756:
case 949:
case 3227:
case 2273:
case 873:
case 3034:
case 3303:
case 777:
case 2712:
case 519:
case 300:
case 1057:
case 507:
case 2077:
case 1125:
case 2422:
case 3023:
case 3150:
case 2671:
case 59:
case 2781:
case 1506:
case 780:
case 2319:
case 793:
case 332:
case 916:
case 2869:
case 546:
case 1400:
case 3565:
case 699:
case 3291:
case 3602:
case 3795:
case 1924:
case 2458:
case 2942:
case 1350:
case 3343:
case 3235:
case 4077:
case 1427:
case 228:
case 3521:
case 3731:
case 3030:
case 3009:
case 2169:
case 3481:
case 931:
case 3532:
case 2308:
case 1570:
case 356:
case 1947:
case 986:
case 1161:
case 3278:
case 265:
case 3788:
case 2130:
case 3678:
case 225:
case 2710:
case 1493:
case 2617:
case 2447:
case 214:
case 1377:
case 3989:
case 3549:
case 2976:
case 1380:
case 3877:
case 2823:
case 85:
case 268:
case 2298:
case 2845:
case 277:
case 993:
case 2818:
case 1995:
case 3973:
case 350:
case 1236:
case 3069:
case 3724:
case 1759:
case 414:
case 2939:
case 1796:
case 3394:
case 2255:
case 2372:
case 1566:
case 2513:
case 3264:
case 2118:
case 3177:
case 2123:
case 4011:
case 2145:
case 1958:
case 2528:
case 1612:
case 834:
case 1279:
case 3301:
case 2552:
case 3747:
case 1653:
case 2685:
case 284:
case 1046:
case 477:
case 3662:
case 3516:
case 2900:
case 199:
case 398:
case 11:
case 354:
case 3436:
case 1238:
case 1251:
case 1328:
case 3852:
case 2783:
case 3530:
case 1863:
case 2259:
case 1087:
case 1681:
case 4054:
case 306:
case 4082:
case 3917:
case 2433:
case 3032:
case 3363:
case 3293:
case 2689:
case 3786:
case 3813:
case 3676:
case 3518:
case 3644:
case 3113:
case 1015:
case 1048:
case 3985:
case 749:
case 3523:
case 2834:
case 977:
case 830:
case 1210:
case 968:
case 3479:
case 1890:
case 280:
case 2486:
case 914:
case 3639:
case 2357:
case 2736:
case 2526:
case 1999:
case 643:
case 869:
case 1464:
case 1402:
case 1841:
case 2420:
case 410:
case 544:
case 3184:
case 2849:
case 127:
case 1798:
case 361:
case 3726:
case 2810:
case 344:
case 2290:
case 120:
case 3961:
case 1324:
case 3888:
case 3257:
case 855:
case 3430:
case 2360:
case 639:
case 4022:
case 1027:
case 1472:
case 2718:
case 1911:
case 4031:
case 1249:
case 2138:
case 3409:
case 3780:
case 3081:
case 166:
case 2723:
case 2533:
case 2151:
case 3824:
case 1388:
case 1076:
case 392:
case 2507:
case 3648:
case 1205:
case 3423:
case 759:
case 2709:
case 3615:
case 2480:
case 2838:
case 991:
case 2908:
case 2586:
case 1347:
case 776:
case 2426:
case 3847:
case 1665:
case 1502:
case 962:
case 1564:
case 3266:
case 1950:
case 2058:
case 3396:
case 3925:
case 3188:
case 3359:
case 2730:
case 2031:
case 2520:
case 487:
case 42:
case 76:
case 470:
case 3752:
case 1078:
case 3371:
case 2136:
case 641:
case 3820:
case 2705:
case 1763:
case 808:
case 3449:
case 262:
case 664:
case 909:
case 3355:
case 2294:
case 3272:
case 3929:
case 84:
case 1871:
case 2814:
case 2879:
case 1669:
case 340:
case 547:
case 3886:
case 1035:
case 3133:
case 124:
case 2364:
case 3538:
case 2302:
case 3728:
case 1560:
case 3833:
case 2179:
case 2056:
case 462:
case 2625:
case 688:
case 1171:
case 2643:
case 1697:
case 2114:
case 1091:
case 1954:
case 2428:
case 1542:
case 92:
case 3120:
case 2452:
case 2588:
case 2948:
case 1155:
case 335:
case 1898:
case 1223:
case 17:
case 103:
case 3646:
case 4067:
case 3416:
case 1004:
case 1218:
case 3405:
case 1062:
case 3584:
case 3488:
case 1286:
case 450:
case 562:
case 2640:
case 3775:
case 1793:
case 954:
case 2604:
case 998:
case 2662:
case 263:
case 3809:
case 1656:
case 247:
case 1699:
case 3939:
case 2394:
case 1220:
case 3372:
case 2202:
case 591:
case 2264:
case 134:
case 2177:
case 3123:
case 3751:
case 3050:
case 3424:
case 3145:
case 2097:
case 3738:
case 1667:
case 3845:
case 1496:
case 1760:
case 570:
case 377:
case 700:
case 463:
case 2635:
case 1590:
case 3927:
case 93:
case 2438:
case 2069:
case 2534:
case 2451:
case 2724:
case 1981:
case 2678:
case 1868:
case 3011:
case 1092:
case 3447:
case 1172:
case 2475:
case 102:
case 15:
case 1323:
case 2549:
case 3976:
case 1224:
case 636:
case 3526:
case 3116:
case 2065:
case 3420:
case 406:
case 2152:
case 3849:
case 2483:
case 1658:
case 629:
case 3991:
case 1631:
case 1912:
case 2644:
case 23:
case 1471:
case 2113:
case 4021:
case 2985:
case 2545:
case 2523:
case 498:
case 454:
case 3904:
case 2707:
case 732:
case 393:
case 1857:
case 169:
case 587:
case 509:
case 3714:
case 310:
case 517:
case 3134:
case 2917:
case 2032:
case 2363:
case 2509:
case 2828:
case 1501:
case 81:
case 1247:
case 3407:
case 3689:
case 648:
case 4065:
case 2676:
case 298:
case 60:
case 2436:
case 652:
case 611:
case 1702:
case 2852:
case 963:
case 3149:
case 1029:
case 3935:
case 3783:
case 3816:
case 2021:
case 2530:
case 2627:
case 3673:
case 3259:
case 704:
case 3426:
case 1893:
case 2847:
case 3603:
case 492:
case 1213:
case 2943:
case 3058:
case 2583:
case 2396:
case 2925:
case 1555:
case 3520:
case 1654:
case 2514:
case 2418:
case 940:
case 2423:
case 1142:
case 3709:
case 2615:
case 3480:
case 3838:
case 317:
case 510:
case 3946:
case 1252:
case 2579:
case 2992:
case 3974:
case 3138:
case 387:
case 2081:
case 32:
case 2777:
case 1860:
case 3745:
case 1089:
case 957:
case 1401:
case 1842:
case 3919:
case 155:
case 1310:
case 694:
case 820:
case 3810:
case 642:
case 244:
case 1768:
case 3290:
case 3342:
case 2888:
case 137:
case 2430:
case 3360:
case 935:
case 1193:
case 3095:
case 1598:
case 440:
case 2120:
case 2053:
case 3452:
case 3588:
case 3484:
case 1085:
case 3183:
case 235:
case 525:
case 961:
case 2608:
case 1280:
case 1164:
case 1102:
case 803:
case 2903:
case 992:
case 3099:
case 1757:
case 3625:
case 3114:
case 568:
case 2268:
case 707:
case 1226:
case 3428:
case 3734:
case 1559:
case 2929:
case 789:
case 2107:
case 108:
case 721:
case 3661:
case 3814:
case 4053:
case 240:
case 1766:
case 2886:
case 2434:
case 2133:
case 3364:
case 1921:
case 2728:
case 1932:
case 2784:
case 1611:
case 1017:
case 2674:
case 1864:
case 2752:
case 1441:
case 1379:
case 196:
case 3201:
case 3547:
case 683:
case 14:
case 3136:
case 1314:
case 3716:
case 584:
case 2619:
case 2449:
case 3883:
case 438:
case 2581:
case 1748:
case 2941:
case 3362:
case 246:
case 2856:
case 549:
case 2899:
case 4083:
case 333:
case 3007:
case 864:
case 3601:
case 29:
case 3812:
case 841:
case 105:
case 1891:
case 3340:
case 1353:
case 2274:
case 1949:
case 907:
case 3765:
case 1840:
case 1429:
case 64:
case 2036:
case 1312:
case 2990:
case 761:
case 3595:
case 744:
case 3957:
case 1626:
case 171:
case 1104:
case 2465:
case 1162:
case 3225:
case 238:
case 3966:
case 3531:
case 3454:
case 446:
case 2083:
case 3558:
case 3732:
case 1677:
case 1071:
case 565:
case 1787:
case 921:
case 1191:
case 3378:
case 2317:
case 2963:
case 655:
case 740:
case 1096:
case 1461:
case 1176:
case 3797:
case 2038:
case 3181:
case 3690:
case 3339:
case 4010:
case 586:
case 839:
case 2994:
case 3229:
case 3972:
case 2195:
case 860:
case 1127:
case 1:
case 1909:
case 3300:
case 1708:
case 2858:
case 36:
case 2287:
case 2831:
case 407:
case 142:
case 1746:
case 1652:
case 2711:
case 1945:
case 2553:
case 2131:
case 1381:
case 1139:
case 2206:
case 2248:
case 1719:
case 3663:
case 1254:
case 3556:
case 3327:
case 516:
case 3968:
case 219:
case 2122:
case 3024:
case 3450:
case 1443:
case 2497:
case 4075:
case 2666:
case 1876:
case 2512:
case 3203:
case 3696:
case 4005:
case 3659:
case 4016:
case 1806:
case 2756:
case 1848:
case 1295:
case 1561:
case 3273:
case 3712:
case 1791:
case 316:
case 2998:
case 3289:
case 2693:
case 1647:
case 1740:
case 1041:
case 3753:
case 3865:
case 1704:
case 111:
case 2854:
case 1762:
case 2882:
case 10:
case 173:
case 3315:
case 3306:
case 1778:
case 4034:
case 1688:
case 129:
case 1914:
case 763:
case 1485:
case 878:
case 2016:
case 904:
case 630:
case 2244:
case 1258:
case 386:
case 1231:
case 2767:
case 1870:
case 843:
case 3832:
case 495:
case 979:
case 3964:
case 331:
case 2955:
case 1148:
case 2597:
case 1983:
case 1525:
case 2329:
case 1735:
case 956:
case 2642:
case 1106:
case 3169:
case 2481:
case 1744:
case 2722:
case 3308:
case 3993:
case 3346:
case 1633:
case 1975:
case 559:
case 851:
case 706:
case 2278:
case 365:
case 2996:
case 2343:
case 1397:
case 2235:
case 1119:
case 65:
case 798:
case 2111:
case 1846:
case 4023:
case 3698:
case 1938:
case 2731:
case 1267:
case 2030:
case 4018:
case 432:
case 1503:
case 1369:
case 2565:
case 3960:
case 1108:
case 2602:
case 1620:
case 1537:
case 4009:
case 1819:
case 2795:
case 3942:
case 2361:
case 3431:
case 1299:
case 3554:
case 3077:
case 882:
case 3671:
case 3197:
case 4030:
case 3319:
case 2262:
case 900:
case 1910:
case 634:
case 2204:
case 3374:
case 404:
case 1686:
case 2701:
case 3160:
case 420:
case 3252:
case 2216:
case 1263:
case 3571:
case 2859:
case 1709:
case 3142:
case 545:
case 2896:
case 2044:
case 1520:
case 1730:
case 1637:
case 3682:
case 2794:
case 1110:
case 3772:
case 3654:
case 1875:
case 1603:
case 4076:
case 3893:
case 3351:
case 3213:
case 2468:
case 2039:
case 2564:
case 3338:
case 764:
case 530:
case 741:
case 2472:
case 3598:
case 4044:
case 3193:
case 1629:
case 4000:
case 2234:
case 97:
case 220:
case 66:
case 2388:
case 3842:
case 2196:
case 844:
case 4039:
case 1241:
case 1919:
case 355:
case 2249:
case 1974:
case 985:
case 718:
case 1151:
case 1745:
case 1533:
case 12:
case 187:
case 569:
case 2091:
case 2466:
case 676:
case 1413:
case 3757:
case 1625:
case 4078:
case 1734:
case 1524:
case 2954:
case 1428:
case 3226:
case 835:
case 1099:
case 1056:
case 1179:
case 203:
case 3280:
case 2223:
case 3277:
case 2245:
case 3102:
case 2062:
case 3164:
case 2004:
case 920:
case 2333:
case 1183:
case 3085:
case 2040:
case 55:
case 502:
case 1915:
case 753:
case 2209:
case 1136:
case 34:
case 162:
case 2855:
case 1705:
case 3441:
case 3864:
case 485:
case 840:
case 1692:
case 3017:
case 3611:
case 726:
case 3932:
case 1970:
case 2198:
case 1201:
case 633:
case 2457:
case 3766:
case 2669:
case 4040:
case 1879:
case 1302:
case 3921:
case 1364:
case 2035:
case 47:
case 3596:
case 403:
case 760:
case 215:
case 4062:
case 2871:
case 1067:
case 1118:
case 334:
case 778:
case 1513:
case 508:
case 2931:
case 1424:
case 3043:
case 1751:
case 1123:
case 1939:
case 3330:
case 1809:
case 1372:
case 2283:
case 3220:
case 1255:
case 863:
case 2046:
case 2214:
case 2008:
case 299:
case 3309:
case 1552:
case 3286:
case 1944:
case 2922:
case 3793:
case 743:
case 3233:
case 1976:
case 3345:
case 3323:
case 3868:
case 1130:
case 628:
case 3172:
case 927:
case 98:
case 1447:
case 1617:
case 3092:
case 2194:
case 1011:
case 3590:
case 2557:
case 2326:
case 2236:
case 177:
case 3496:
case 3061:
case 2101:
case 168:
case 1823:
case 499:
case 1818:
case 4008:
case 975:
case 1962:
case 369:
case 193:
case 401:
case 180:
case 686:
case 2006:
case 3471:
case 3622:
case 1577:
case 631:
case 2048:
case 3953:
case 83:
case 1082:
case 1849:
case 4070:
case 4087:
case 3455:
case 1054:
case 1991:
case 2798:
case 3658:
case 1526:
case 2999:
case 1736:
case 782:
case 2956:
case 3224:
case 1105:
case 3003:
case 2402:
case 2163:
case 2568:
case 3334:
case 1805:
case 2141:
case 806:
case 1816:
case 1259:
case 712:
case 1296:
case 2251:
case 2313:
case 3029:
case 3702:
case 201:
case 475:
case 3247:
case 854:
case 898:
case 3501:
case 2384:
case 2275:
case 2352:
case 345:
case 1779:
case 1407:
case 1689:
case 2771:
case 1978:
case 3157:
case 1714:
case 3305:
case 3316:
case 48:
case 427:
case 3762:
case 311:
case 1306:
case 1315:
case 2519:
case 373:
case 30:
case 2281:
case 1511:
case 1289:
case 2574:
case 1865:
case 3041:
case 2675:
case 800:
case 3647:
case 1121:
case 2785:
case 3417:
case 2933:
case 3365:
case 2435:
case 1132:
case 2651:
case 3791:
case 3090:
case 2638:
case 1659:
case 1696:
case 3936:
case 1467:
case 443:
case 1273:
case 3848:
case 2354:
case 3295:
case 3525:
case 3983:
case 3543:
case 1028:
case 131:
case 558:
case 2066:
case 3870:
case 278:
case 693:
case 1456:
case 3321:
case 1832:
case 1821:
case 243:
case 1370:
case 2986:
case 2546:
case 1387:
case 3914:
case 2137:
case 3688:
case 2610:
case 2440:
case 1052:
case 381:
case 3473:
case 3174:
case 3846:
case 1495:
case 3094:
case 3267:
case 856:
case 513:
case 3938:
case 1698:
case 701:
case 251:
case 2350:
case 3529:
case 879:
case 212:
case 967:
case 4068:
case 978:
case 1217:
case 677:
case 2476:
case 3001:
case 3607:
case 3489:
case 482:
case 1308:
case 3744:
case 1169:
case 2587:
case 3975:
case 1346:
case 1993:
case 451:
case 149:
case 2614:
case 2861:
case 2143:
case 1319:
case 2515:
case 775:
case 1655:
case 3819:
case 3537:
case 823:
case 3620:
case 1554:
case 832:
case 1942:
case 1582:
case 3256:
case 1458:
case 2212:
case 3108:
case 2439:
case 2068:
case 583:
case 3503:
case 2892:
case 727:
case 1957:
case 597:
case 1595:
case 2399:
case 2630:
case 2737:
case 3573:
case 390:
case 2527:
case 3804:
case 846:
case 2117:
case 3934:
case 720:
case 264:
case 662:
case 1765:
case 3840:
case 241:
case 3312:
case 953:
case 2269:
case 4064:
case 4002:
case 218:
case 3949:
case 3589:
case 1292:
case 3748:
case 1033:
case 2470:
case 3706:
case 2487:
case 2609:
case 464:
case 1378:
case 441:
case 3916:
case 3835:
case 2500:
case 1732:
case 2618:
case 1522:
case 960:
case 2448:
case 2406:
case 3191:
case 176:
case 2645:
case 3071:
case 3770:
case 2623:
case 2367:
case 1482:
case 3055:
case 3140:
case 1721:
case 1020:
case 1454:
case 2928:
case 3162:
case 926:
case 2817:
case 1335:
case 16:
case 2322:
case 3746:
case 2649:
case 342:
case 4060:
case 2419:
case 2173:
case 2474:
case 1047:
case 2578:
case 3492:
case 4042:
case 1411:
case 1300:
case 821:
case 3517:
case 3839:
case 3:
case 3800:
case 2725:
case 2535:
case 62:
case 260:
case 1690:
case 1181:
case 687:
case 715:
case 1229:
case 2221:
case 394:
case 358:
case 724:
case 3059:
case 453:
case 2189:
case 3876:
case 548:
case 3613:
case 1450:
case 2042:
case 1024:
case 3144:
case 3628:
case 918:
case 1556:
case 3254:
case 2395:
case 1968:
case 1237:
case 1881:
case 2408:
case 3139:
case 2504:
case 3381:
case 2562:
case 2605:
case 1663:
case 3827:
case 819:
case 253:
case 2792:
case 703:
case 3918:
case 3684:
case 511:
case 77:
case 3652:
case 460:
case 552:
case 1376:
case 50:
case 3945:
case 3585:
case 1005:
case 3462:
case 886:
case 3986:
case 236:
case 1244:
case 831:
case 2914:
case 526:
case 1200:
case 2778:
case 1971:
case 2485:
case 3829:
case 1182:
case 3440:
case 1453:
case 281:
case 2735:
case 1329:
case 2525:
case 2543:
case 3920:
case 2148:
case 3491:
case 2115:
case 1642:
case 2624:
case 63:
case 2870:
case 734:
case 560:
case 2231:
case 2258:
case 411:
case 2321:
case 40:
case 473:
case 1569:
case 2365:
case 1303:
case 3435:
case 1034:
case 3651:
case 2170:
case 3057:
case 2090:
case 2187:
case 3638:
case 2815:
case 248:
case 1799:
case 2561:
case 1227:
case 2848:
case 2295:
case 436:
case 1882:
case 3129:
case 211:
case 3519:
case 195:
case 3837:
case 3907:
case 273:
case 252:
case 20:
case 654:
case 3574:
case 2740:
case 2041:
case 3675:
case 816:
case 2647:
case 553:
case 1693:
case 3683:
case 1795:
case 541:
case 382:
case 2727:
case 2819:
case 564:
case 2299:
case 2256:
case 3212:
case 3068:
case 2108:
case 3439:
case 1291:
case 2369:
case 1602:
case 952:
case 973:
case 1664:
case 2874:
case 1811:
case 948:
case 3311:
case 3253:
case 3400:
case 3789:
case 2776:
case 3679:
case 3548:
case 123:
case 1150:
case 3143:
case 3444:
case 3125:
case 769:
case 1262:
case 3515:
case 3506:
case 3476:
case 2700:
case 2001:
case 3843:
case 1850:
case 2607:
case 1722:
case 1532:
case 2744:
case 1481:
case 1009:
case 828:
case 745:
case 156:
case 650:
case 2975:
case 3570:
case 3427:
case 3072:
case 2094:
case 981:
case 2267:
case 351:
case 1959:
case 3636:
case 3350:
case 2739:
case 2529:
case 1325:
case 104:
case 1235:
case 3913:
case 3367:
case 2055:
case 512:
case 2162:
case 1465:
case 2104:
case 3817:
case 3729:
case 3539:
case 2626:
case 2250:
case 1199:
case 1156:
case 958:
case 1079:
case 2916:
case 3500:
case 3544:
case 483:
case 490:
case 1246:
case 3448:
case 1208:
case 2071:
case 2770:
case 2677:
case 2891:
case 471:
case 19:
case 318:
case 1167:
case 1274:
case 1385:
case 2211:
case 2353:
case 3576:
case 1941:
case 2748:
case 1219:
case 3470:
case 755:
case 4055:
case 283:
case 3630:
case 3356:
case 2573:
case 3737:
case 2098:
case 290:
case 3527:
case 1421:
case 2804:
case 1754:
case 1782:
case 3117:
case 2934:
case 364:
case 2429:
case 582:
case 341:
case 494:
case 1215:
case 3408:
case 2139:
case 2381:
case 3873:
case 4059:
case 2827:
case 1895:
case 353:
case 3792:
case 2918:
case 2684:
case 1010:
case 990:
case 3980:
case 3540:
case 1158:
case 2945:
case 2585:
case 2876:
case 1666:
case 2613:
case 2425:
case 3889:
case 1122:
case 3265:
case 2628:
case 1373:
case 3926:
case 3761:
case 189:
case 1051:
case 708:
case 3634:
case 86:
case 294:
case 2059:
case 2096:
case 2461:
case 2844:
case 1822:
case 1270:
case 971:
case 1901:
case 1858:
case 326:
case 3322:
case 661:
case 3232:
case 3173:
case 3474:
case 3093:
case 339:
case 2517:
case 2839:
case 543:
case 2:
case 3076:
case 2842:
case 2401:
case 3196:
case 1824:
case 192:
case 255:
case 3249:
case 621:
case 3632:
case 1992:
case 575:
case 2860:
case 1777:
case 366:
case 1780:
case 1081:
case 1687:
case 2969:
case 1430:
case 2073:
case 2598:
case 82:
case 1147:
case 3621:
case 2193:
case 2494:
case 783:
case 1536:
case 790:
case 527:
case 1888:
case 3324:
case 2997:
case 1359:
case 2555:
case 1396:
case 1583:
case 2682:
case 713:
case 501:
case 2654:
case 94:
case 4089:
case 809:
case 2213:
case 1266:
case 3468:
case 455:
case 3564:
case 3502:
case 2338:
case 619:
case 3701:
case 2160:
case 3000:
case 874:
case 2375:
case 1579:
case 3347:
case 3216:
case 2571:
case 1514:
case 2142:
case 1124:
case 3896:
case 3044:
case 1886:
case 3457:
case 4085:
case 2490:
case 2766:
case 1713:
case 3669:
case 324:
case 1133:
case 3035:
case 1551:
case 2383:
case 2596:
case 2559:
case 3320:
case 208:
case 3230:
case 3855:
case 1619:
case 3763:
case 7:
case 1820:
case 2441:
case 1674:
case 3386:
case 742:
case 3078:
case 296:
case 3198:
case 599:
case 1608:
case 2280:
case 2277:
case 2463:
case 2164:
case 3004:
case 1416:
case 3333:
case 408:
case 1053:
case 3040:
case 1120:
case 870:
case 135:
case 1510:
case 3307:
case 385:
case 1937:
case 2336:
case 3171:
case 1807:
case 3954:
case 2226:
case 496:
case 1186:
case 656:
case 825:
case 3326:
case 3995:
case 1724:
case 1451:
case 1534:
case 1069:
case 1880:
case 2459:
case 2496:
case 3101:
case 2760:
case 585:
case 679:
case 814:
case 969:
case 604:
case 3019:
case 1989:
case 3377:
case 2868:
case 1678:
case 503:
case 2207:
case 1788:
case 3074:
case 2092:
case 3493:
case 752:
case 3194:
case 1826:
case 1604:
case 729:
case 3046:
case 4061:
case 3214:
case 2168:
case 399:
case 1516:
case 781:
case 1301:
case 1640:
case 1747:
case 1264:
case 234:
case 1180:
case 3612:
case 1097:
case 3442:
case 2025:
case 1177:
case 3460:
case 147:
case 2656:
case 2220:
case 945:
case 1394:
case 2247:
case 2501:
case 3275:
case 1828:
case 430:
case 3070:
case 600:
case 3190:
case 3681:
case 3087:
case 2305:
case 1509:
case 1363:
case 3141:
case 1627:
case 1530:
case 1720:
case 2594:
case 3251:
case 3313:
case 31:
case 2029:
case 1884:
case 301:
case 2764:
case 2912:
case 38:
case 2658:
case 1390:
case 1242:
case 3956:
case 3841:
case 880:
case 2334:
case 3210:
case 269:
case 1600:
case 566:
case 375:
case 2166:
case 3006:
case 1113:
case 1644:
case 2622:
case 2349:
case 1985:
case 2953:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771246801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,];
var gg_b = "1771246801/";

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
