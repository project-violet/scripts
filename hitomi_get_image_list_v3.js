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
case 2269:
case 48:
case 28:
case 1165:
case 4062:
case 3403:
case 4071:
case 1466:
case 3918:
case 897:
case 119:
case 1012:
case 236:
case 3870:
case 534:
case 2416:
case 676:
case 714:
case 653:
case 336:
case 1451:
case 1968:
case 3424:
case 1410:
case 3544:
case 3269:
case 38:
case 2918:
case 1799:
case 1928:
case 503:
case 3759:
case 3598:
case 2540:
case 415:
case 3491:
case 215:
case 3939:
case 2636:
case 3874:
case 4047:
case 2775:
case 1580:
case 1414:
case 2491:
case 3420:
case 625:
case 3540:
case 808:
case 1546:
case 1379:
case 4022:
case 3047:
case 2874:
case 2981:
case 2022:
case 2229:
case 2905:
case 672:
case 127:
case 432:
case 2598:
case 3602:
case 767:
case 1739:
case 1569:
case 586:
case 3335:
case 3258:
case 1672:
case 53:
case 1093:
case 2650:
case 2519:
case 547:
case 3284:
case 71:
case 3728:
case 958:
case 1178:
case 1694:
case 2611:
case 1656:
case 659:
case 3519:
case 2309:
case 3611:
case 188:
case 1167:
case 2335:
case 2258:
case 2832:
case 1001:
case 2538:
case 2768:
case 3813:
case 2688:
case 812:
case 941:
case 4053:
case 2806:
case 1240:
case 3045:
case 1085:
case 2489:
case 2431:
case 3777:
case 3806:
case 3999:
case 1863:
case 3489:
case 582:
case 1449:
case 4045:
case 1142:
case 3182:
case 3538:
case 457:
case 509:
case 2813:
case 3688:
case 1470:
case 3329:
case 1725:
case 2810:
case 393:
case 2978:
case 2283:
case 612:
case 3050:
case 322:
case 1803:
case 3866:
case 2452:
case 1860:
case 3011:
case 3557:
case 1243:
case 1693:
case 222:
case 4011:
case 3452:
case 1094:
case 137:
case 2011:
case 2557:
case 3159:
case 275:
case 475:
case 2329:
case 2175:
case 2967:
case 1279:
case 1072:
case 1891:
case 3715:
case 2814:
case 2826:
case 569:
case 1107:
case 426:
case 524:
case 3088:
case 1474:
case 761:
case 3653:
case 2927:
case 2096:
case 1199:
case 121:
case 2369:
case 1492:
case 2295:
case 859:
case 3237:
case 1765:
case 2653:
case 3096:
case 1535:
case 3927:
case 1685:
case 2054:
case 4054:
case 3295:
case 2715:
case 3814:
case 1601:
case 580:
case 326:
case 4088:
case 2088:
case 3662:
case 1386:
case 3579:
case 2965:
case 1340:
case 248:
case 448:
case 3423:
case 499:
case 1915:
case 1633:
case 2555:
case 909:
case 152:
case 1398:
case 2168:
case 2543:
case 2423:
case 3555:
case 2662:
case 3965:
case 2579:
case 2346:
case 2782:
case 1727:
case 52:
case 156:
case 2128:
case 3002:
case 1908:
case 3925:
case 1413:
case 1687:
case 853:
case 1030:
case 251:
case 1181:
case 1432:
case 1139:
case 3873:
case 670:
case 2925:
case 2647:
case 2036:
case 3622:
case 230:
case 2297:
case 3400:
case 1406:
case 93:
case 1778:
case 1889:
case 3849:
case 2209:
case 3128:
case 1831:
case 272:
case 543:
case 1606:
case 3600:
case 2359:
case 3821:
case 472:
case 632:
case 3663:
case 1854:
case 425:
case 3375:
case 225:
case 3091:
case 1779:
case 1582:
case 2527:
case 2208:
case 1997:
case 325:
case 2848:
case 899:
case 2542:
case 3527:
case 3208:
case 1909:
case 372:
case 1896:
case 2064:
case 117:
case 3003:
case 561:
case 3567:
case 2462:
case 3737:
case 3604:
case 1811:
case 2894:
case 3060:
case 1119:
case 1307:
case 3957:
case 164:
case 769:
case 2861:
case 353:
case 830:
case 1051:
case 1517:
case 268:
case 636:
case 780:
case 851:
case 574:
case 3016:
case 453:
case 276:
case 1433:
case 3169:
case 68:
case 3471:
case 4003:
case 3462:
case 2060:
case 171:
case 1401:
case 491:
case 822:
case 1995:
case 1186:
case 893:
case 2453:
case 901:
case 1140:
case 1508:
case 2031:
case 1227:
case 4031:
case 1485:
case 3445:
case 2146:
case 391:
case 2180:
case 1692:
case 2445:
case 3089:
case 1073:
case 598:
case 1674:
case 1198:
case 2368:
case 2830:
case 549:
case 2676:
case 620:
case 2735:
case 310:
case 2797:
case 2341:
case 3158:
case 2328:
case 3217:
case 1983:
case 3943:
case 3652:
case 1305:
case 763:
case 2217:
case 3955:
case 758:
case 2184:
case 2943:
case 123:
case 57:
case 3565:
case 3676:
case 210:
case 1267:
case 2158:
case 820:
case 3998:
case 734:
case 1074:
case 1822:
case 514:
case 2887:
case 416:
case 2315:
case 3539:
case 2137:
case 3581:
case 2940:
case 1365:
case 2986:
case 2195:
case 3137:
case 2769:
case 2581:
case 961:
case 1980:
case 3940:
case 3195:
case 1946:
case 2454:
case 2689:
case 884:
case 2998:
case 3315:
case 2505:
case 3076:
case 2308:
case 3518:
case 857:
case 2729:
case 3275:
case 435:
case 235:
case 1577:
case 622:
case 3450:
case 2183:
case 2944:
case 1456:
case 4052:
case 1155:
case 2450:
case 3183:
case 1738:
case 1568:
case 3944:
case 1862:
case 3259:
case 3052:
case 1325:
case 2812:
case 3308:
case 4076:
case 3729:
case 1461:
case 3833:
case 1179:
case 335:
case 2664:
case 1378:
case 51:
case 4063:
case 3885:
case 2784:
case 3317:
case 3109:
case 470:
case 3801:
case 1430:
case 2758:
case 3436:
case 370:
case 3241:
case 1281:
case 1239:
case 836:
case 3691:
case 2620:
case 2801:
case 651:
case 2197:
case 3599:
case 1367:
case 88:
case 3000:
case 3938:
case 2317:
case 3228:
case 3507:
case 1744:
case 3063:
case 3784:
case 2780:
case 2603:
case 2382:
case 832:
case 4004:
case 1969:
case 3268:
case 3023:
case 408:
case 998:
case 949:
case 3624:
case 1559:
case 3616:
case 2919:
case 1798:
case 2268:
case 815:
case 648:
case 308:
case 709:
case 3919:
case 2616:
case 1218:
case 501:
case 3603:
case 3780:
case 2893:
case 3277:
case 3004:
case 1575:
case 1504:
case 2320:
case 3391:
case 866:
case 2722:
case 3075:
case 878:
case 3819:
case 689:
case 3276:
case 2059:
case 1455:
case 2993:
case 2483:
case 3150:
case 792:
case 1156:
case 158:
case 342:
case 2111:
case 3059:
case 1678:
case 1443:
case 556:
case 442:
case 3483:
case 2150:
case 3617:
case 242:
case 254:
case 2747:
case 1172:
case 4075:
case 1479:
case 2819:
case 660:
case 2276:
case 595:
case 2901:
case 1148:
case 552:
case 1274:
case 1829:
case 446:
case 3506:
case 2324:
case 3682:
case 3154:
case 2513:
case 2495:
case 487:
case 2985:
case 1366:
case 3771:
case 2437:
case 3838:
case 2682:
case 2154:
case 3513:
case 3437:
case 1945:
case 2771:
case 3985:
case 2838:
case 2360:
case 387:
case 862:
case 2532:
case 796:
case 606:
case 3901:
case 2745:
case 3844:
case 1884:
case 2204:
case 2389:
case 3753:
case 771:
case 1858:
case 1552:
case 35:
case 228:
case 3933:
case 3068:
case 428:
case 764:
case 1373:
case 729:
case 1701:
case 2933:
case 25:
case 169:
case 618:
case 2068:
case 950:
case 2753:
case 1665:
case 3389:
case 1018:
case 3331:
case 521:
case 2574:
case 54:
case 3409:
case 3886:
case 2200:
case 3840:
case 1880:
case 2898:
case 1213:
case 1130:
case 3608:
case 3136:
case 3435:
case 1947:
case 3592:
case 2608:
case 3898:
case 2136:
case 2497:
case 2435:
case 265:
case 1039:
case 1232:
case 2987:
case 1922:
case 1081:
case 3028:
case 3574:
case 3263:
case 3200:
case 1793:
case 2840:
case 3855:
case 3260:
case 1790:
case 2469:
case 1065:
case 1618:
case 3203:
case 3796:
case 2934:
case 2216:
case 2015:
case 4015:
case 109:
case 2668:
case 3879:
case 1133:
case 1748:
case 3668:
case 1251:
case 2855:
case 2260:
case 2677:
case 3843:
case 1721:
case 3469:
case 3162:
case 2203:
case 733:
case 381:
case 1794:
case 3573:
case 1438:
case 2008:
case 1772:
case 3549:
case 3376:
case 1761:
case 1589:
case 3429:
case 995:
case 3291:
case 2930:
case 3008:
case 1187:
case 2429:
case 2549:
case 1214:
case 305:
case 3220:
case 1226:
case 3930:
case 2641:
case 2628:
case 883:
case 13:
case 481:
case 1756:
case 1837:
case 3352:
case 2573:
case 147:
case 2736:
case 2857:
case 2675:
case 3961:
case 600:
case 3972:
case 790:
case 1444:
case 2956:
case 3659:
case 1078:
case 2300:
case 1524:
case 2702:
case 69:
case 1193:
case 3551:
case 3017:
case 3994:
case 2484:
case 2659:
case 2510:
case 3956:
case 94:
case 1950:
case 3702:
case 1306:
case 2017:
case 2551:
case 3363:
case 937:
case 1911:
case 1332:
case 1560:
case 1730:
case 3675:
case 2458:
case 238:
case 1897:
case 438:
case 1835:
case 1101:
case 2082:
case 2289:
case 3990:
case 2921:
case 1185:
case 2231:
case 4082:
case 550:
case 3526:
case 921:
case 1440:
case 1520:
case 2304:
case 3480:
case 2990:
case 1249:
case 3082:
case 531:
case 1699:
case 2145:
case 2446:
case 3304:
case 3153:
case 711:
case 2480:
case 134:
case 1498:
case 979:
case 1734:
case 3948:
case 739:
case 1988:
case 1710:
case 504:
case 3973:
case 3288:
case 1174:
case 1698:
case 1312:
case 3716:
case 840:
case 1751:
case 2760:
case 4095:
case 101:
case 3254:
case 2530:
case 1192:
case 2362:
case 1931:
case 2296:
case 2680:
case 2037:
case 1221:
case 2646:
case 3760:
case 3362:
case 1766:
case 3371:
case 3680:
case 687:
case 3703:
case 3646:
case 1686:
case 2724:
case 646:
case 1808:
case 2716:
case 185:
case 3322:
case 1170:
case 3720:
case 2791:
case 3176:
case 96:
case 2459:
case 1055:
case 713:
case 2534:
case 2083:
case 1256:
case 1294:
case 3152:
case 2211:
case 3684:
case 1644:
case 2250:
case 3083:
case 1079:
case 2475:
case 1272:
case 289:
case 360:
case 2322:
case 2176:
case 3791:
case 3827:
case 727:
case 1393:
case 2428:
case 50:
case 167:
case 2100:
case 1230:
case 1113:
case 3097:
case 2629:
case 3236:
case 3914:
case 1920:
case 2441:
case 3590:
case 2521:
case 665:
case 1596:
case 3629:
case 1991:
case 2590:
case 1405:
case 2202:
case 3163:
case 917:
case 3548:
case 1882:
case 1964:
case 4009:
case 1588:
case 3100:
case 1106:
case 2477:
case 3731:
case 3561:
case 283:
case 881:
case 3572:
case 3345:
case 2966:
case 1385:
case 929:
case 1301:
case 218:
case 2556:
case 1773:
case 1916:
case 1057:
case 2594:
case 2910:
case 3556:
case 318:
case 628:
case 539:
case 3867:
case 1550:
case 805:
case 2572:
case 3353:
case 731:
case 2561:
case 383:
case 1418:
case 1960:
case 511:
case 3966:
case 2669:
case 2609:
case 3350:
case 3899:
case 3906:
case 1900:
case 681:
case 1356:
case 1038:
case 3164:
case 2585:
case 2697:
case 3191:
case 2635:
case 2029:
case 1425:
case 4029:
case 3408:
case 1287:
case 2932:
case 1361:
case 2191:
case 3120:
case 1126:
case 605:
case 1770:
case 2350:
case 756:
case 1394:
case 1166:
case 1321:
case 3160:
case 4069:
case 2271:
case 2262:
case 1465:
case 1657:
case 2124:
case 394:
case 1348:
case 1019:
case 865:
case 494:
case 1923:
case 1774:
case 3415:
case 1151:
case 3593:
case 3396:
case 1792:
case 1859:
case 1334:
case 8:
case 2974:
case 939:
case 378:
case 2839:
case 174:
case 1201:
case 2189:
case 3587:
case 3695:
case 1427:
case 3245:
case 2482:
case 571:
case 842:
case 1040:
case 1086:
case 2253:
case 1149:
case 2587:
case 3189:
case 3482:
case 3131:
case 1828:
case 2245:
case 4080:
case 2046:
case 466:
case 266:
case 3881:
case 3974:
case 1173:
case 3058:
case 2970:
case 1562:
case 1330:
case 1868:
case 3336:
case 1732:
case 74:
case 3533:
case 517:
case 1478:
case 1044:
case 2818:
case 737:
case 462:
case 3417:
case 1643:
case 2533:
case 4084:
case 29:
case 49:
case 2084:
case 3512:
case 362:
case 3818:
case 2700:
case 2683:
case 2417:
case 1713:
case 4058:
case 846:
case 200:
case 1467:
case 2336:
case 896:
case 1476:
case 1708:
case 4061:
case 3725:
case 2279:
case 2072:
case 44:
case 3056:
case 2243:
case 677:
case 1050:
case 24:
case 437:
case 4094:
case 1866:
case 2917:
case 762:
case 237:
case 1011:
case 3243:
case 1283:
case 2056:
case 60:
case 3693:
case 4056:
case 2255:
case 3094:
case 2860:
case 565:
case 3072:
case 2725:
case 690:
case 3824:
case 3891:
case 2820:
case 479:
case 2601:
case 279:
case 3107:
case 3474:
case 639:
case 3048:
case 2765:
case 1942:
case 4090:
case 86:
case 321:
case 1054:
case 3492:
case 3090:
case 2864:
case 2021:
case 2982:
case 1927:
case 4021:
case 3685:
case 823:
case 1369:
case 1645:
case 421:
case 766:
case 3509:
case 2048:
case 2474:
case 1671:
case 3386:
case 1346:
case 1380:
case 3034:
case 244:
case 546:
case 1423:
case 452:
case 3633:
case 3915:
case 344:
case 3612:
case 794:
case 3398:
case 2034:
case 148:
case 2915:
case 3257:
case 199:
case 817:
case 2386:
case 1965:
case 1177:
case 981:
case 2105:
case 1209:
case 1002:
case 2831:
case 3908:
case 3767:
case 2181:
case 2432:
case 1358:
case 829:
case 395:
case 3595:
case 3687:
case 3030:
case 1297:
case 2767:
case 1141:
case 2908:
case 1873:
case 2537:
case 2413:
case 2687:
case 295:
case 5:
case 905:
case 495:
case 2030:
case 633:
case 2344:
case 273:
case 456:
case 256:
case 3831:
case 331:
case 450:
case 1918:
case 2799:
case 319:
case 629:
case 538:
case 95:
case 4033:
case 2584:
case 2707:
case 3634:
case 2219:
case 136:
case 2876:
case 3451:
case 1115:
case 4012:
case 419:
case 928:
case 3707:
case 1544:
case 1071:
case 350:
case 1062:
case 18:
case 2165:
case 1395:
case 3558:
case 3355:
case 427:
case 3928:
case 1905:
case 227:
case 1598:
case 2580:
case 2546:
case 2426:
case 2379:
case 2125:
case 1939:
case 965:
case 1874:
case 2630:
case 4087:
case 3414:
case 3580:
case 1420:
case 804:
case 115:
case 1047:
case 540:
case 617:
case 2355:
case 288:
case 120:
case 1741:
case 1397:
case 2167:
case 3569:
case 2975:
case 488:
case 9:
case 1258:
case 3672:
case 760:
case 839:
case 3661:
case 2656:
case 66:
case 3093:
case 3244:
case 1728:
case 213:
case 954:
case 811:
case 4093:
case 2959:
case 581:
case 2244:
case 3804:
case 692:
case 2705:
case 2178:
case 2694:
case 388:
case 2739:
case 3167:
case 2672:
case 696:
case 3001:
case 2357:
case 706:
case 3286:
case 2621:
case 3240:
case 1696:
case 655:
case 877:
case 1280:
case 3127:
case 2529:
case 2863:
case 3085:
case 1777:
case 3800:
case 2690:
case 3621:
case 2240:
case 1999:
case 2718:
case 3529:
case 2127:
case 1654:
case 987:
case 3142:
case 1832:
case 2001:
case 3357:
case 4001:
case 1907:
case 3673:
case 738:
case 2719:
case 3207:
case 518:
case 1505:
case 583:
case 2490:
case 3541:
case 1496:
case 3490:
case 1940:
case 2299:
case 813:
case 2365:
case 1986:
case 2649:
case 4092:
case 2673:
case 679:
case 2074:
case 2528:
case 116:
case 1887:
case 3847:
case 4074:
case 439:
case 3070:
case 1518:
case 2461:
case 490:
case 3577:
case 99:
case 20:
case 2143:
case 2984:
case 2871:
case 112:
case 2862:
case 2494:
case 3155:
case 1411:
case 3738:
case 3143:
case 30:
case 2456:
case 477:
case 3871:
case 637:
case 4070:
case 390:
case 1729:
case 740:
case 135:
case 3179:
case 233:
case 1402:
case 3845:
case 673:
case 2281:
case 3614:
case 2239:
case 2032:
case 819:
case 3430:
case 1197:
case 560:
case 705:
case 2626:
case 3929:
case 170:
case 3239:
case 3032:
case 589:
case 3367:
case 1599:
case 1664:
case 3853:
case 850:
case 781:
case 2378:
case 3205:
case 1938:
case 1063:
case 1784:
case 502:
case 1507:
case 2218:
case 2740:
case 3327:
case 2342:
case 3969:
case 2575:
case 1023:
case 3651:
case 404:
case 994:
case 204:
case 1624:
case 3610:
case 1616:
case 2434:
case 2559:
case 827:
case 3218:
case 1603:
case 1382:
case 3786:
case 3342:
case 1660:
case 1277:
case 1004:
case 2969:
case 3666:
case 3606:
case 2896:
case 3138:
case 3854:
case 1663:
case 2755:
case 4014:
case 2014:
case 4026:
case 1091:
case 1848:
case 3582:
case 2935:
case 2487:
case 3997:
case 3014:
case 1020:
case 2888:
case 2779:
case 3225:
case 3613:
case 500:
case 3487:
case 765:
case 1447:
case 172:
case 3909:
case 3896:
case 627:
case 2138:
case 2743:
case 1359:
case 2854:
case 3755:
case 1567:
case 3399:
case 631:
case 1856:
case 1737:
case 1795:
case 471:
case 1060:
case 1604:
case 873:
case 3119:
case 3307:
case 4051:
case 1957:
case 4010:
case 176:
case 728:
case 2433:
case 1623:
case 2119:
case 2307:
case 566:
case 264:
case 2412:
case 1215:
case 1578:
case 1024:
case 3010:
case 75:
case 2399:
case 2850:
case 1462:
case 2265:
case 1471:
case 650:
case 2811:
case 1894:
case 2066:
case 2073:
case 746:
case 3401:
case 4073:
case 2674:
case 2198:
case 3836:
case 3186:
case 1146:
case 3140:
case 1180:
case 2318:
case 3227:
case 787:
case 2242:
case 2049:
case 1445:
case 84:
case 2186:
case 455:
case 1453:
case 2140:
case 2802:
case 2227:
case 2937:
case 3242:
case 3049:
case 496:
case 594:
case 3073:
case 906:
case 3674:
case 1979:
case 2670:
case 545:
case 1158:
case 2339:
case 3493:
case 36:
case 1217:
case 902:
case 292:
case 423:
case 1184:
case 1943:
case 223:
case 1652:
case 821:
case 2493:
case 159:
case 46:
case 1328:
case 613:
case 742:
case 754:
case 1709:
case 2983:
case 323:
case 879:
case 1676:
case 1797:
case 1341:
case 960:
case 3339:
case 1855:
case 1677:
case 3618:
case 1203:
case 708:
case 698:
case 2133:
case 2210:
case 649:
case 3112:
case 1224:
case 3133:
case 557:
case 409:
case 1015:
case 2374:
case 209:
case 1754:
case 2266:
case 1469:
case 1843:
case 4065:
case 282:
case 43:
case 3605:
case 23:
case 2895:
case 2837:
case 1573:
case 447:
case 2902:
case 67:
case 286:
case 4025:
case 1122:
case 3589:
case 2187:
case 2025:
case 3772:
case 3639:
case 2226:
case 930:
case 1008:
case 2370:
case 2531:
case 1147:
case 2761:
case 3187:
case 3025:
case 3936:
case 951:
case 814:
case 3226:
case 2794:
case 33:
case 3756:
case 3837:
case 1750:
case 797:
case 347:
case 2332:
case 2560:
case 735:
case 3313:
case 2067:
case 4067:
case 1510:
case 1484:
case 1659:
case 203:
case 3078:
case 801:
case 922:
case 2306:
case 3516:
case 403:
case 1551:
case 1994:
case 2911:
case 2444:
case 1956:
case 303:
case 1300:
case 2524:
case 643:
case 2516:
case 1363:
case 3560:
case 1736:
case 1857:
case 3503:
case 885:
case 2498:
case 1323:
case 2734:
case 3101:
case 2988:
case 2042:
case 1990:
case 3809:
case 1514:
case 661:
case 2809:
case 1231:
case 81:
case 2440:
case 3591:
case 2520:
case 1153:
case 3498:
case 3607:
case 3734:
case 2835:
case 3564:
case 3273:
case 2161:
case 3787:
case 2172:
case 1391:
case 2314:
case 1075:
case 1819:
case 3667:
case 3270:
case 1276:
case 1:
case 1364:
case 363:
case 759:
case 2443:
case 42:
case 2869:
case 2523:
case 1150:
case 358:
case 142:
case 154:
case 263:
case 1059:
case 2455:
case 1252:
case 3678:
case 3869:
case 1483:
case 258:
case 32:
case 2787:
case 1722:
case 2270:
case 2667:
case 957:
case 3563:
case 1506:
case 2712:
case 601:
case 3292:
case 1762:
case 1771:
case 3366:
case 1360:
case 3121:
case 2190:
case 843:
case 2642:
case 2953:
case 241:
case 441:
case 2099:
case 3627:
case 2366:
case 3945:
case 187:
case 1901:
case 146:
case 2148:
case 4007:
case 3351:
case 685:
case 3712:
case 1316:
case 3310:
case 2500:
case 3884:
case 1844:
case 2349:
case 1753:
case 2576:
case 2457:
case 2373:
case 15:
case 469:
case 269:
case 1068:
case 380:
case 768:
case 936:
case 1912:
case 2858:
case 753:
case 2884:
case 98:
case 1389:
case 3576:
case 3665:
case 3018:
case 1570:
case 2793:
case 932:
case 3213:
case 725:
case 898:
case 3130:
case 1136:
case 165:
case 1435:
case 2232:
case 1987:
case 2922:
case 849:
case 4039:
case 1898:
case 2213:
case 1592:
case 915:
case 3039:
case 2947:
case 1028:
case 3005:
case 1200:
case 2846:
case 1899:
case 1906:
case 1752:
case 1164:
case 1311:
case 207:
case 2545:
case 2425:
case 2287:
case 2361:
case 3553:
case 751:
case 880:
case 3425:
case 1697:
case 1408:
case 730:
case 3372:
case 1776:
case 3361:
case 869:
case 1913:
case 3770:
case 145:
case 824:
case 2900:
case 2356:
case 3394:
case 2038:
case 2963:
case 2859:
case 3321:
case 3465:
case 2774:
case 2110:
case 748:
case 194:
case 2233:
case 609:
case 1388:
case 349:
case 3348:
case 3019:
case 3774:
case 2657:
case 4019:
case 449:
case 2019:
case 1396:
case 3390:
case 3859:
case 1262:
case 1069:
case 2465:
case 3334:
case 2841:
case 3201:
case 374:
case 2173:
case 1587:
case 461:
case 1695:
case 261:
case 3285:
case 2522:
case 2442:
case 2828:
case 858:
case 3086:
case 1046:
case 3149:
case 1805:
case 3442:
case 3828:
case 1482:
case 3522:
case 2285:
case 1131:
case 4086:
case 2334:
case 3098:
case 3841:
case 474:
case 916:
case 1881:
case 1723:
case 1839:
case 274:
case 3173:
case 525:
case 1058:
case 100:
case 3868:
case 3562:
case 3732:
case 1336:
case 1533:
case 19:
case 572:
case 3044:
case 912:
case 3478:
case 3293:
case 1302:
case 3952:
case 3877:
case 722:
case 3655:
case 343:
case 2478:
case 2706:
case 2293:
case 2643:
case 3976:
case 2679:
case 1970:
case 2562:
case 935:
case 1288:
case 3407:
case 3710:
case 1973:
case 1724:
case 2808:
case 1716:
case 2502:
case 3174:
case 3312:
case 285:
case 3192:
case 1254:
case 301:
case 3931:
case 2686:
case 2290:
case 401:
case 201:
case 1530:
case 3766:
case 1037:
case 3290:
case 1646:
case 2248:
case 1825:
case 2407:
case 2174:
case 757:
case 3502:
case 3808:
case 3333:
case 2079:
case 4079:
case 784:
case 570:
case 3726:
case 1322:
case 1176:
case 2387:
case 1720:
case 2815:
case 2294:
case 663:
case 41:
case 102:
case 1865:
case 21:
case 3256:
case 2043:
case 1152:
case 3294:
case 4055:
case 3644:
case 2055:
case 1459:
case 1534:
case 597:
case 3043:
case 31:
case 3079:
case 1658:
case 834:
case 2170:
case 2726:
case 2714:
case 1202:
case 2882:
case 2588:
case 2638:
case 2554:
case 3230:
case 1097:
case 3920:
case 2132:
case 809:
case 3596:
case 3554:
case 2113:
case 925:
case 2920:
case 1521:
case 3481:
case 3439:
case 2596:
case 3405:
case 1428:
case 3964:
case 1842:
case 3588:
case 1548:
case 267:
case 1100:
case 467:
case 1731:
case 1572:
case 1789:
case 2418:
case 2960:
case 1669:
case 1951:
case 4057:
case 2057:
case 3301:
case 1594:
case 968:
case 3773:
case 214:
case 3924:
case 1468:
case 1123:
case 3234:
case 2550:
case 3916:
case 414:
case 3511:
case 3057:
case 1556:
case 118:
case 2924:
case 314:
case 624:
case 2916:
case 1867:
case 1353:
case 2749:
case 3418:
case 3960:
case 2817:
case 1966:
case 2385:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745928001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,];
var gg_b = "1745928001/";

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
