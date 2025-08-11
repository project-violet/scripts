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
case 986:
case 1924:
case 1981:
case 291:
case 3240:
case 102:
case 1649:
case 2014:
case 3003:
case 1895:
case 688:
case 1198:
case 4014:
case 3354:
case 3181:
case 3124:
case 196:
case 3936:
case 2432:
case 491:
case 2153:
case 560:
case 3464:
case 4030:
case 2323:
case 3998:
case 575:
case 4079:
case 3983:
case 3127:
case 1476:
case 2951:
case 1001:
case 3357:
case 3401:
case 4017:
case 3005:
case 3533:
case 724:
case 1893:
case 1927:
case 1559:
case 2970:
case 2928:
case 3733:
case 4068:
case 1018:
case 3200:
case 2700:
case 2884:
case 2194:
case 1759:
case 1609:
case 249:
case 1256:
case 36:
case 1202:
case 564:
case 2671:
case 3289:
case 1391:
case 2789:
case 1680:
case 1731:
case 1854:
case 280:
case 3441:
case 1041:
case 1445:
case 2887:
case 3786:
case 3395:
case 2540:
case 2270:
case 943:
case 794:
case 3528:
case 1812:
case 1755:
case 1676:
case 1594:
case 3667:
case 3810:
case 2046:
case 2798:
case 3298:
case 2338:
case 421:
case 3664:
case 3236:
case 3837:
case 3142:
case 3049:
case 362:
case 3940:
case 1753:
case 221:
case 3399:
case 4046:
case 3739:
case 2935:
case 1553:
case 790:
case 1082:
case 3482:
case 2986:
case 1899:
case 757:
case 1645:
case 2585:
case 2598:
case 137:
case 1797:
case 2536:
case 1480:
case 1337:
case 708:
case 2159:
case 1334:
case 1902:
case 4075:
case 2006:
case 1100:
case 544:
case 2329:
case 269:
case 1310:
case 3618:
case 3326:
case 3570:
case 3900:
case 469:
case 3009:
case 2933:
case 2228:
case 3728:
case 1555:
case 2075:
case 266:
case 2874:
case 3946:
case 505:
case 1541:
case 2624:
case 2730:
case 161:
case 842:
case 1639:
case 3545:
case 2949:
case 2714:
case 816:
case 1146:
case 3653:
case 3217:
case 3816:
case 2717:
case 1869:
case 3655:
case 1670:
case 651:
case 3279:
case 2779:
case 2627:
case 283:
case 2819:
case 2877:
case 1701:
case 1820:
case 3672:
case 1651:
case 1567:
case 41:
case 1175:
case 129:
case 563:
case 4000:
case 3320:
case 3952:
case 1971:
case 2456:
case 1501:
case 3906:
case 2402:
case 3150:
case 3694:
case 3369:
case 3505:
case 1433:
case 2000:
case 671:
case 2909:
case 3171:
case 21:
case 2243:
case 3459:
case 3743:
case 2530:
case 3086:
case 3745:
case 975:
case 152:
case 3503:
case 3697:
case 1031:
case 732:
case 3431:
case 1173:
case 1564:
case 1179:
case 758:
case 3472:
case 1451:
case 1072:
case 2083:
case 1361:
case 1117:
case 3844:
case 3365:
case 4083:
case 3509:
case 73:
case 138:
case 3455:
case 1055:
case 2575:
case 3917:
case 2164:
case 2249:
case 446:
case 3453:
case 2573:
case 3132:
case 301:
case 1582:
case 435:
case 2424:
case 3363:
case 2481:
case 4085:
case 707:
case 3039:
case 2085:
case 3246:
case 3847:
case 2098:
case 2642:
case 235:
case 887:
case 1304:
case 2036:
case 1130:
case 1347:
case 1097:
case 3804:
case 3631:
case 2813:
case 2280:
case 2141:
case 1635:
case 2945:
case 1863:
case 1250:
case 616:
case 3709:
case 1168:
case 1865:
case 918:
case 388:
case 3028:
case 319:
case 2775:
case 17:
case 2656:
case 2706:
case 2118:
case 3494:
case 1271:
case 3968:
case 1094:
case 3252:
case 199:
case 4007:
case 3411:
case 2125:
case 2828:
case 208:
case 1560:
case 769:
case 828:
case 2465:
case 4061:
case 3327:
case 3562:
case 2678:
case 1415:
case 1957:
case 2007:
case 408:
case 1336:
case 2004:
case 3013:
case 1048:
case 1796:
case 604:
case 290:
case 1385:
case 105:
case 673:
case 345:
case 457:
case 2463:
case 3324:
case 2987:
case 490:
case 572:
case 477:
case 996:
case 2839:
case 1191:
case 281:
case 1824:
case 1988:
case 2737:
case 3991:
case 3836:
case 3237:
case 481:
case 902:
case 327:
case 3898:
case 277:
case 2047:
case 2262:
case 529:
case 2958:
case 3762:
case 600:
case 3193:
case 2710:
case 1008:
case 3210:
case 2851:
case 2734:
case 1677:
case 2669:
case 1993:
case 1760:
case 4044:
case 2870:
case 937:
case 2287:
case 2663:
case 2886:
case 780:
case 2196:
case 1090:
case 1999:
case 3490:
case 365:
case 220:
case 1254:
case 1492:
case 1613:
case 800:
case 3648:
case 55:
case 1802:
case 1856:
case 1257:
case 2478:
case 749:
case 3784:
case 2221:
case 90:
case 3721:
case 538:
case 3611:
case 2359:
case 2469:
case 1110:
case 1912:
case 839:
case 3356:
case 3126:
case 224:
case 3077:
case 3934:
case 2160:
case 3019:
case 3910:
case 1419:
case 3466:
case 599:
case 3758:
case 1066:
case 1523:
case 791:
case 350:
case 2791:
case 3291:
case 1474:
case 2331:
case 117:
case 1288:
case 1137:
case 926:
case 2761:
case 697:
case 650:
case 2215:
case 3715:
case 478:
case 2657:
case 3178:
case 1711:
case 929:
case 1684:
case 1621:
case 2499:
case 1687:
case 1263:
case 3873:
case 2654:
case 2190:
case 3204:
case 3713:
case 2704:
case 845:
case 1748:
case 1346:
case 952:
case 175:
case 160:
case 3623:
case 1038:
case 3513:
case 2974:
case 961:
case 827:
case 654:
case 207:
case 3846:
case 3247:
case 2747:
case 407:
case 2382:
case 735:
case 2695:
case 4037:
case 2849:
case 3916:
case 1060:
case 43:
case 1969:
case 3460:
case 4034:
case 2426:
case 493:
case 3244:
case 665:
case 2010:
case 3169:
case 2977:
case 23:
case 1122:
case 1352:
case 1029:
case 3371:
case 1920:
case 458:
case 3429:
case 140:
case 2364:
case 1023:
case 3638:
case 300:
case 2292:
case 3792:
case 3574:
case 432:
case 3163:
case 870:
case 415:
case 3696:
case 865:
case 3904:
case 215:
case 1314:
case 3087:
case 2148:
case 2699:
case 1330:
case 1487:
case 1963:
case 1484:
case 97:
case 3084:
case 999:
case 1317:
case 2516:
case 1161:
case 3907:
case 2457:
case 3577:
case 2915:
case 2367:
case 3961:
case 189:
case 1025:
case 2111:
case 71:
case 118:
case 1566:
case 627:
case 854:
case 803:
case 2876:
case 2277:
case 2219:
case 3719:
case 3944:
case 645:
case 938:
case 223:
case 1458:
case 2626:
case 783:
case 2318:
case 2722:
case 2493:
case 2612:
case 2108:
case 3817:
case 3660:
case 766:
case 1147:
case 2495:
case 1590:
case 3592:
case 2274:
case 2091:
case 850:
case 613:
case 3595:
case 3588:
case 2090:
case 1886:
case 1287:
case 1196:
case 120:
case 2723:
case 4090:
case 3938:
case 3754:
case 1591:
case 2254:
case 895:
case 2257:
case 2856:
case 3757:
case 2615:
case 647:
case 3225:
case 2725:
case 3661:
case 1221:
case 1284:
case 3593:
case 1833:
case 3422:
case 2926:
case 2134:
case 1129:
case 3162:
case 2912:
case 3333:
case 3416:
case 3960:
case 2110:
case 2477:
case 1420:
case 625:
case 2066:
case 3644:
case 1160:
case 2523:
case 867:
case 702:
case 1331:
case 921:
case 1791:
case 796:
case 3335:
case 3795:
case 217:
case 3788:
case 2137:
case 2560:
case 682:
case 1828:
case 2011:
case 3370:
case 3065:
case 1984:
case 88:
case 3461:
case 3925:
case 2529:
case 1372:
case 3351:
case 4011:
case 3894:
case 2415:
case 3184:
case 2957:
case 2954:
case 3187:
case 3897:
case 3296:
case 566:
case 2336:
case 2413:
case 3404:
case 1004:
case 2738:
case 2398:
case 3923:
case 1987:
case 737:
case 3063:
case 331:
case 980:
case 1123:
case 181:
case 2824:
case 3599:
case 2995:
case 2988:
case 726:
case 1737:
case 991:
case 3447:
case 177:
case 263:
case 1044:
case 2729:
case 1394:
case 2677:
case 1851:
case 3872:
case 194:
case 3260:
case 3328:
case 3158:
case 2212:
case 984:
case 1870:
case 3622:
case 51:
case 2226:
case 314:
case 3726:
case 4008:
case 240:
case 1364:
case 1913:
case 1292:
case 3948:
case 3054:
case 2314:
case 2790:
case 3113:
case 2104:
case 1699:
case 614:
case 2484:
case 2421:
case 3818:
case 3115:
case 2379:
case 1843:
case 868:
case 418:
case 2161:
case 3305:
case 3911:
case 1457:
case 1301:
case 1915:
case 2278:
case 289:
case 218:
case 1111:
case 2566:
case 2368:
case 3720:
case 3634:
case 2220:
case 3801:
case 3578:
case 2766:
case 3610:
case 2458:
case 3266:
case 123:
case 3867:
case 569:
case 2662:
case 3908:
case 3343:
case 1722:
case 1626:
case 1493:
case 1805:
case 1108:
case 2269:
case 3095:
case 1488:
case 2147:
case 3088:
case 1803:
case 2590:
case 1341:
case 761:
case 3637:
case 1091:
case 3491:
case 2832:
case 2508:
case 2978:
case 1544:
case 38:
case 584:
case 2871:
case 3211:
case 2711:
case 799:
case 2684:
case 2265:
case 1809:
case 3192:
case 591:
case 3882:
case 3763:
case 3990:
case 3349:
case 3248:
case 2748:
case 1992:
case 1880:
case 1704:
case 325:
case 1974:
case 1037:
case 3380:
case 3691:
case 1504:
case 347:
case 1747:
case 580:
case 3174:
case 966:
case 1382:
case 1695:
case 668:
case 2375:
case 983:
case 2969:
case 1412:
case 4029:
case 814:
case 3012:
case 313:
case 3309:
case 3565:
case 3177:
case 1426:
case 3410:
case 2658:
case 2708:
case 1010:
case 2116:
case 3966:
case 193:
case 549:
case 2462:
case 2029:
case 1507:
case 264:
case 2920:
case 1034:
case 13:
case 2122:
case 738:
case 2826:
case 3727:
case 2812:
case 3255:
case 1251:
case 2772:
case 2676:
case 3829:
case 1783:
case 1338:
case 633:
case 2597:
case 376:
case 3614:
case 426:
case 3253:
case 2753:
case 786:
case 2281:
case 121:
case 3724:
case 2224:
case 3781:
case 2553:
case 1073:
case 920:
case 3581:
case 1131:
case 437:
case 1986:
case 237:
case 1585:
case 3838:
case 2337:
case 885:
case 3186:
case 3452:
case 2956:
case 3071:
case 2794:
case 2572:
case 1052:
case 1159:
case 3406:
case 2902:
case 1006:
case 2310:
case 523:
case 1583:
case 169:
case 3362:
case 2643:
case 3050:
case 8:
case 3475:
case 40:
case 1075:
case 2555:
case 622:
case 1360:
case 2136:
case 2185:
case 1014:
case 2403:
case 2895:
case 3032:
case 2531:
case 296:
case 1432:
case 1589:
case 62:
case 3139:
case 330:
case 3742:
case 2064:
case 2242:
case 1153:
case 1325:
case 685:
case 1155:
case 3502:
case 3556:
case 184:
case 2476:
case 1951:
case 2405:
case 578:
case 3417:
case 1017:
case 3384:
case 1079:
case 4067:
case 743:
case 1500:
case 1233:
case 3675:
case 558:
case 2443:
case 1821:
case 1700:
case 89:
case 593:
case 3128:
case 2202:
case 1671:
case 833:
case 3468:
case 2256:
case 606:
case 879:
case 3756:
case 3606:
case 2731:
case 2680:
case 3997:
case 2854:
case 2041:
case 180:
case 2445:
case 1197:
case 1887:
case 4041:
case 990:
case 1235:
case 957:
case 2451:
case 1552:
case 2072:
case 2179:
case 25:
case 4055:
case 2117:
case 3808:
case 3105:
case 2361:
case 3483:
case 3027:
case 1575:
case 2055:
case 238:
case 1573:
case 392:
case 755:
case 3081:
case 241:
case 1642:
case 441:
case 3498:
case 609:
case 876:
case 3103:
case 3964:
case 2130:
case 634:
case 1348:
case 146:
case 3313:
case 2304:
case 2932:
case 306:
case 1036:
case 4053:
case 2347:
case 915:
case 1546:
case 3941:
case 3145:
case 2635:
case 1773:
case 1141:
case 760:
case 775:
case 2782:
case 1945:
case 2865:
case 3:
case 1209:
case 2168:
case 3750:
case 2250:
case 3811:
case 2633:
case 2428:
case 4094:
case 1118:
case 1602:
case 1752:
case 3771:
case 32:
case 1656:
case 3143:
case 1308:
case 299:
case 630:
case 2344:
case 1874:
case 3636:
case 3392:
case 461:
case 2541:
case 3264:
case 557:
case 3042:
case 2764:
case 590:
case 3685:
case 3698:
case 2639:
case 1730:
case 261:
case 2146:
case 1714:
case 322:
case 272:
case 3440:
case 1949:
case 1040:
case 744:
case 1205:
case 993:
case 2869:
case 93:
case 1779:
case 1627:
case 2518:
case 2767:
case 183:
case 3866:
case 3267:
case 359:
case 2820:
case 1877:
case 1276:
case 1568:
case 1366:
case 333:
case 834:
case 2567:
case 4059:
case 2175:
case 2878:
case 3319:
case 2501:
case 809:
case 1768:
case 3109:
case 594:
case 2433:
case 2316:
case 718:
case 2322:
case 11:
case 2059:
case 789:
case 3218:
case 2718:
case 2152:
case 3400:
case 1245:
case 1530:
case 3180:
case 1514:
case 4031:
case 1182:
case 1980:
case 1089:
case 3374:
case 2564:
case 2741:
case 2173:
case 1054:
case 1948:
case 694:
case 2163:
case 2332:
case 2696:
case 315:
case 332:
case 1303:
case 3148:
case 2087:
case 3845:
case 1290:
case 1113:
case 3843:
case 453:
case 3522:
case 2021:
case 3516:
case 298:
case 2907:
case 1520:
case 2165:
case 3915:
case 3301:
case 2577:
case 2519:
case 4021:
case 3367:
case 1778:
case 2425:
case 1801:
case 1720:
case 2629:
case 3277:
case 3876:
case 2719:
case 690:
case 239:
case 1908:
case 1578:
case 2944:
case 323:
case 1266:
case 657:
case 1867:
case 4058:
case 3626:
case 439:
case 1343:
case 3722:
case 1093:
case 3805:
case 3612:
case 3493:
case 2660:
case 608:
case 3803:
case 2814:
case 1088:
case 182:
case 906:
case 2830:
case 1864:
case 2947:
case 3341:
case 167:
case 556:
case 1491:
case 1637:
case 3544:
case 2625:
case 2715:
case 2207:
case 428:
case 788:
case 2178:
case 2875:
case 378:
case 933:
case 228:
case 979:
case 808:
case 1765:
case 1763:
case 3499:
case 1099:
case 1882:
case 3880:
case 3704:
case 3992:
case 857:
case 511:
case 125:
case 2438:
case 2623:
case 3547:
case 1691:
case 2513:
case 3037:
case 3974:
case 1380:
case 877:
case 307:
case 3747:
case 2846:
case 1563:
case 3382:
case 1174:
case 3695:
case 3849:
case 2916:
case 3166:
case 113:
case 358:
case 959:
case 1565:
case 1026:
case 2922:
case 4062:
case 1309:
case 2120:
case 2244:
case 2062:
case 894:
case 3919:
case 2169:
case 3010:
case 1434:
case 33:
case 3977:
case 3507:
case 534:
case 2429:
case 658:
case 3138:
case 592:
case 1588:
case 465:
case 3287:
case 815:
case 3196:
case 832:
case 956:
case 1938:
case 270:
case 1223:
case 3591:
case 1754:
case 63:
case 1604:
case 1996:
case 2648:
case 2199:
case 1607:
case 1757:
case 1661:
case 1225:
case 1859:
case 3284:
case 1593:
case 76:
case 2611:
case 3129:
case 4019:
case 3022:
case 2584:
case 4077:
case 1333:
case 1929:
case 3420:
case 324:
case 823:
case 2126:
case 2302:
case 1557:
case 2019:
case 2910:
case 3962:
case 2608:
case 585:
case 716:
case 250:
case 2074:
case 1554:
case 3791:
case 3331:
case 1795:
case 1788:
case 2840:
case 4074:
case 450:
case 497:
case 148:
case 74:
case 2411:
case 308:
case 3125:
case 4015:
case 3921:
case 3984:
case 3465:
case 2327:
case 1925:
case 1461:
case 3510:
case 1184:
case 3534:
case 1351:
case 2013:
case 3537:
case 2448:
case 390:
case 751:
case 357:
case 1238:
case 2381:
case 131:
case 445:
case 2324:
case 1799:
case 3987:
case 2154:
case 1339:
case 110:
case 3123:
case 436:
case 522:
case 3839:
case 911:
case 381:
case 2237:
case 2836:
case 2991:
case 807:
case 771:
case 2195:
case 1447:
case 2898:
case 2885:
case 2188:
case 3047:
case 3044:
case 2762:
case 579:
case 83:
case 2193:
case 3710:
case 1872:
case 893:
case 394:
case 3851:
case 3734:
case 2234:
case 3394:
case 1229:
case 1158:
case 1855:
case 615:
case 632:
case 1260:
case 1726:
case 858:
case 114:
case 3870:
case 1315:
case 1901:
case 3976:
case 3552:
case 2051:
case 3083:
case 680:
case 2844:
case 4070:
case 2979:
case 3101:
case 1550:
case 2070:
case 3427:
case 2509:
case 3311:
case 568:
case 3905:
case 3575:
case 3903:
case 821:
case 1640:
case 3164:
case 2453:
case 3249:
case 3573:
case 1081:
case 2930:
case 2039:
case 3746:
case 1498:
case 2847:
case 2246:
case 649:
case 4039:
case 3642:
case 106:
case 3546:
case 1941:
case 185:
case 1145:
case 1848:
case 2497:
case 3280:
case 3813:
case 3141:
case 2549:
case 995:
case 2273:
case 3945:
case 1600:
case 3943:
case 1918:
case 2659:
case 3209:
case 2709:
case 691:
case 1811:
case 288:
case 219:
case 488:
case 869:
case 12:
case 728:
case 2206:
case 3602:
case 1771:
case 2252:
case 3308:
case 2861:
case 1392:
case 366:
case 1685:
case 2946:
case 3442:
case 1042:
case 3730:
case 531:
case 3681:
case 3624:
case 510:
case 3040:
case 3203:
case 3714:
case 2703:
case 2653:
case 891:
case 3717:
case 2217:
case 2655:
case 704:
case 739:
case 3779:
case 2279:
case 3627:
case 2543:
case 383:
case 1866:
case 884:
case 159:
case 913:
case 2776:
case 3877:
case 2672:
case 1319:
case 179:
case 133:
case 2576:
case 2320:
case 4033:
case 1109:
case 3768:
case 1377:
case 2694:
case 2369:
case 3517:
case 2505:
case 98:
case 3000:
case 621:
case 514:
case 753:
case 31:
case 3243:
case 1180:
case 700:
case 1982:
case 3245:
case 2035:
case 2503:
case 3980:
case 880:
case 3089:
case 2431:
case 3892:
case 3270:
case 2770:
case 1679:
case 1617:
case 2834:
case 2601:
case 2810:
case 3783:
case 2283:
case 3046:
case 1446:
case 846:
case 2298:
case 595:
case 3798:
case 462:
case 2837:
case 812:
case 176:
case 3632:
case 3396:
case 835:
case 262:
case 1614:
case 2049:
case 321:
case 61:
case 3239:
case 3935:
case 1473:
case 3073:
case 3131:
case 1524:
case 251:
case 1581:
case 3986:
case 2482:
case 3598:
case 683:
case 451:
case 2641:
case 567:
case 1297:
case 1896:
case 3536:
case 156:
case 1186:
case 2080:
case 666:
case 1452:
case 3052:
case 1071:
case 1294:
case 1133:
case 3583:
case 369:
case 968:
case 1959:
case 3450:
case 2326:
case 1050:
case 2900:
case 3933:
case 2312:
case 1475:
case 3228:
case 44:
case 3075:
case 1430:
case 797:
case 1387:
case 216:
case 2586:
case 1953:
case 242:
case 3589:
case 442:
case 2354:
case 2124:
case 2181:
case 1032:
case 3432:
case 2891:
case 2936:
case 1646:
case 3153:
case 416:
case 2985:
case 130:
case 525:
case 2998:
case 1742:
case 3155:
case 2467:
case 3858:
case 3951:
case 384:
case 883:
case 2357:
case 58:
case 1955:
case 4076:
case 3500:
case 3172:
case 1151:
case 1321:
case 703:
case 3970:
case 3928:
case 3233:
case 3884:
case 3700:
case 3821:
case 2418:
case 3650:
case 1259:
case 2043:
case 349:
case 1128:
case 635:
case 1756:
case 1468:
case 134:
case 3789:
case 2289:
case 1231:
case 931:
case 380:
case 4045:
case 547:
case 910:
case 3197:
case 770:
case 765:
case 2786:
case 2388:
case 3540:
case 2395:
case 1673:
case 422:
case 2392:
case 60:
case 3764:
case 3541:
case 802:
case 767:
case 3639:
case 1545:
case 361:
case 1230:
case 1214:
case 1703:
case 222:
case 3146:
case 1705:
case 1816:
case 1279:
case 459:
case 1543:
case 3670:
case 637:
case 2267:
case 259:
case 2201:
case 3651:
case 233:
case 3567:
case 2319:
case 3878:
case 279:
case 29:
case 3501:
case 2002:
case 1150:
case 2056:
case 1320:
case 1576:
case 1268:
case 3971:
case 1505:
case 1033:
case 3316:
case 3433:
case 4002:
case 1369:
case 49:
case 3059:
case 1459:
case 3106:
case 1743:
case 479:
case 3718:
case 433:
case 2982:
case 1745:
case 1086:
case 795:
case 2890:
case 352:
case 3031:
case 1697:
case 3564:
case 3451:
case 3307:
case 1051:
case 2571:
case 713:
case 2315:
case 3179:
case 3117:
case 2105:
case 2176:
case 1509:
case 2027:
case 1979:
case 2550:
case 1455:
case 939:
case 3055:
case 973:
case 1749:
case 747:
case 2024:
case 3582:
case 2081:
case 101:
case 3114:
case 2498:
case 826:
case 2964:
case 492:
case 206:
case 597:
case 2941:
case 285:
case 837:
case 1780:
case 1804:
case 2689:
case 2848:
case 2145:
case 1549:
case 3635:
case 485:
case 725:
case 2282:
case 1659:
case 3168:
case 2:
case 3865:
case 3250:
case 1028:
case 2811:
case 696:
case 1494:
case 574:
case 2771:
case 1252:
case 1968:
case 37:
case 1807:
case 503:
case 399:
case 998:
case 3344:
case 3924:
case 116:
case 430:
case 1535:
case 3888:
case 142:
case 411:
case 1240:
case 2953:
case 2139:
case 1985:
case 1464:
case 3242:
case 3064:
case 1998:
case 2646:
case 1983:
case 3067:
case 2502:
case 2170:
case 2556:
case 1076:
case 1005:
case 2955:
case 2384:
case 2479:
case 1733:
case 2675:
case 2259:
case 1043:
case 409:
case 3018:
case 641:
case 1200:
case 2358:
case 209:
case 2652:
case 16:
case 2756:
case 829:
case 2468:
case 3256:
case 3857:
case 2994:
case 3680:
case 2997:
case 1289:
case 3391:
case 3445:
case 852:
case 1786:
case 936:
case 1735:
case 638:
case 3227:
case 974:
case 838:
case 1528:
case 652:
case 3755:
case 2255:
case 903:
case 2617:
case 3594:
case 1810:
case 1667:
case 1283:
case 85:
case 1664:
case 3140:
case 1285:
case 2446:
case 3942:
case 187:
case 1837:
case 162:
case 2614:
case 1049:
case 3449:
case 3753:
case 2253:
case 997:
case 841:
case 1142:
case 1739:
case 171:
case 3281:
case 1399:
case 2473:
case 456:
case 965:
case 3899:
case 1539:
case 3189:
case 151:
case 1482:
case 337:
case 2135:
case 731:
case 1080:
case 1989:
case 3480:
case 710:
case 2297:
case 256:
case 2186:
case 899:
case 3956:
case 504:
case 1551:
case 3902:
case 2406:
case 748:
case 573:
case 3310:
case 4050:
case 87:
case 1900:
case 3409:
case 1156:
case 1009:
case 3643:
case 2527:
case 2959:
case 1618:
case 1102:
case 1326:
case 1570:
case 2475:
case 3555:
case 4071:
case 3508:
case 1207:
case 1806:
case 28:
case 1852:
case 3871:
case 1875:
case 1178:
case 3711:
case 617:
case 72:
case 3850:
case 3621:
case 3684:
case 3265:
case 2192:
case 2882:
case 425:
case 2990:
case 805:
case 3096:
case 1204:
case 375:
case 1438:
case 3346:
case 2437:
case 2380:
case 792:
case 886:
case 2174:
case 706:
case 3060:
case 2119:
case 1460:
case 3969:
case 1916:
case 213:
case 2565:
case 2026:
case 1350:
case 2177:
case 1922:
case 4026:
case 3658:
case 2410:
case 1169:
case 2208:
case 1244:
case 3116:
case 2966:
case 863:
case 3352:
case 3029:
case 1429:
case 3920:
case 2434:
case 3306:
case 56:
case 3122:
case 1515:
case 1423:
case 663:
case 340:
case 3023:
case 295:
case 2841:
case 587:
case 1696:
case 1792:
case 1574:
case 2948:
case 4054:
case 3790:
case 495:
case 571:
case 1084:
case 2115:
case 733:
case 3107:
case 779:
case 2911:
case 198:
case 2305:
case 4057:
case 2569:
case 1165:
case 2057:
case 686:
case 1907:
case 2376:
case 2778:
case 389:
case 3278:
case 1961:
case 3566:
case 1629:
case 4093:
case 843:
case 2634:
case 2720:
case 1944:
case 2578:
case 2867:
case 2266:
case 3458:
case 605:
case 3662:
case 2908:
case 759:
case 1660:
case 1817:
case 1216:
case 3269:
case 2769:
case 1814:
case 2088:
case 3147:
case 1830:
case 551:
case 267:
case 2864:
case 4088:
case 3832:
case 1411:
case 248:
case 2512:
case 1327:
case 96:
case 2065:
case 2370:
case 1157:
case 2925:
case 3383:
case 3529:
case 2407:
case 3954:
case 2187:
case 3048:
case 2296:
case 2897:
case 410:
case 875:
case 3413:
case 2404:
case 3336:
case 305:
case 4063:
case 3398:
case 2923:
case 3385:
case 1154:
case 2063:
case 3299:
case 210:
case 3191:
case 3881:
case 2599:
case 3995:
case 2853:
case 1836:
case 386:
case 1237:
case 855:
case 916:
case 3674:
case 2447:
case 1898:
case 1195:
case 127:
case 942:
case 1408:
case 640:
case 1210:
case 1666:
case 363:
case 1883:
case 864:
case 2444:
case 3729:
case 2872:
case 1234:
case 3760:
case 2260:
case 3993:
case 2855:
case 3212:
case 2622:
case 3827:
case 3340:
case 2588:
case 3090:
case 3999:
case 1787:
case 501:
case 2223:
case 1648:
case 1889:
case 664:
case 1092:
case 2754:
case 3613:
case 3492:
case 2996:
case 818:
case 154:
case 2757:
case 468:
case 3257:
case 1558:
case 2078:
case 3725:
case 1800:
case 4078:
case 709:
case 734:
case 2422:
case 3134:
case 588:
case 2333:
case 3912:
case 3293:
case 2793:
case 174:
case 1302:
case 4069:
case 660:
case 1758:
case 343:
case 1466:
case 844:
case 1608:
case 1019:
case 2644:
case 1910:
case 2647:
case 3523:
case 197:
case 3842:
case 962:
case 971:
case 3389:
case 1074:
case 3474:
case 711:
case 3295:
case 2795:
case 3288:
case 2386:
case 730:
case 3137:
case 1587:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754895601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,];
var gg_b = "1754895601/";

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
