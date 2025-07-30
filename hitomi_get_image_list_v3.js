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
case 3833:
case 3400:
case 331:
case 1003:
case 1683:
case 3793:
case 3046:
case 406:
case 363:
case 3159:
case 2062:
case 295:
case 1397:
case 575:
case 2089:
case 3471:
case 1888:
case 679:
case 3004:
case 2958:
case 2233:
case 3025:
case 3684:
case 867:
case 2665:
case 2149:
case 683:
case 873:
case 526:
case 2528:
case 3416:
case 960:
case 2113:
case 3318:
case 284:
case 587:
case 1419:
case 3014:
case 781:
case 569:
case 2454:
case 1991:
case 2619:
case 276:
case 3248:
case 3180:
case 2643:
case 3406:
case 3077:
case 225:
case 3308:
case 3653:
case 1599:
case 330:
case 3410:
case 2933:
case 2050:
case 596:
case 1661:
case 385:
case 2848:
case 1049:
case 2461:
case 3895:
case 2653:
case 721:
case 230:
case 3258:
case 3933:
case 3050:
case 1021:
case 2675:
case 198:
case 3768:
case 285:
case 4078:
case 1125:
case 664:
case 3848:
case 610:
case 1330:
case 2590:
case 2072:
case 2014:
case 693:
case 3454:
case 899:
case 1086:
case 2180:
case 3643:
case 3295:
case 54:
case 1146:
case 325:
case 3089:
case 2121:
case 1484:
case 2471:
case 2004:
case 3958:
case 1891:
case 4035:
case 3233:
case 3665:
case 648:
case 43:
case 2638:
case 1336:
case 1731:
case 3528:
case 2416:
case 128:
case 2318:
case 3532:
case 2186:
case 2833:
case 915:
case 2627:
case 2400:
case 3067:
case 1234:
case 734:
case 2046:
case 829:
case 574:
case 263:
case 611:
case 586:
case 3062:
case 3537:
case 395:
case 3158:
case 711:
case 3507:
case 1310:
case 1862:
case 2353:
case 4082:
case 2715:
case 214:
case 1204:
case 634:
case 1770:
case 1747:
case 1630:
case 4087:
case 2375:
case 1867:
case 3502:
case 2803:
case 836:
case 3880:
case 1344:
case 3585:
case 1856:
case 995:
case 3319:
case 3541:
case 1940:
case 748:
case 3779:
case 4005:
case 3203:
case 3195:
case 1701:
case 2280:
case 315:
case 3091:
case 1889:
case 4024:
case 2959:
case 3497:
case 2384:
case 1371:
case 46:
case 3365:
case 2338:
case 1636:
case 3309:
case 2787:
case 3249:
case 1555:
case 3133:
case 2436:
case 3213:
case 1904:
case 1316:
case 2782:
case 1418:
case 3492:
case 690:
case 104:
case 1925:
case 2849:
case 2724:
case 1300:
case 764:
case 2286:
case 1188:
case 819:
case 1240:
case 1277:
case 1134:
case 261:
case 2769:
case 3903:
case 2322:
case 3512:
case 2813:
case 858:
case 984:
case 2259:
case 621:
case 432:
case 3849:
case 3724:
case 1095:
case 2517:
case 3769:
case 361:
case 1967:
case 3813:
case 2574:
case 3259:
case 333:
case 2497:
case 3384:
case 837:
case 1723:
case 2365:
case 1877:
case 3787:
case 2249:
case 2886:
case 1760:
case 3436:
case 1956:
case 1058:
case 924:
case 3618:
case 681:
case 449:
case 1692:
case 2859:
case 3782:
case 1872:
case 1526:
case 1814:
case 25:
case 930:
case 1250:
case 539:
case 635:
case 3564:
case 3986:
case 1354:
case 977:
case 3529:
case 963:
case 783:
case 2203:
case 1267:
case 2195:
case 870:
case 2639:
case 3148:
case 1825:
case 3280:
case 3608:
case 3088:
case 1804:
case 2091:
case 1752:
case 2343:
case 3034:
case 3959:
case 2158:
case 308:
case 3921:
case 1520:
case 2949:
case 3715:
case 994:
case 3551:
case 2913:
case 3375:
case 1361:
case 1033:
case 1766:
case 2880:
case 826:
case 1325:
case 4026:
case 733:
case 2763:
case 1707:
case 1130:
case 2720:
case 3542:
case 624:
case 1304:
case 685:
case 875:
case 1018:
case 3547:
case 761:
case 2253:
case 144:
case 1210:
case 1702:
case 2984:
case 210:
case 1971:
case 1854:
case 293:
case 492:
case 1785:
case 2648:
case 3139:
case 1741:
case 2108:
case 1861:
case 1206:
case 101:
case 3303:
case 1579:
case 3853:
case 2552:
case 502:
case 379:
case 2118:
case 1216:
case 3755:
case 3313:
case 2560:
case 694:
case 1136:
case 3349:
case 41:
case 3511:
case 4020:
case 3773:
case 2238:
case 4063:
case 2726:
case 3633:
case 2284:
case 631:
case 422:
case 3943:
case 980:
case 1906:
case 2222:
case 1372:
case 1314:
case 2865:
case 2488:
case 3838:
case 2809:
case 3884:
case 887:
case 1008:
case 2434:
case 708:
case 1688:
case 3919:
case 869:
case 1634:
case 2745:
case 1816:
case 1524:
case 3359:
case 991:
case 1505:
case 652:
case 1569:
case 3488:
case 2838:
case 1039:
case 2884:
case 1871:
case 3386:
case 695:
case 2919:
case 3781:
case 1691:
case 1283:
case 311:
case 3745:
case 715:
case 920:
case 1961:
case 566:
case 1587:
case 2755:
case 3560:
case 1800:
case 3953:
case 2773:
case 2265:
case 827:
case 3284:
case 393:
case 2243:
case 75:
case 2695:
case 145:
case 2139:
case 3648:
case 3108:
case 874:
case 886:
case 3380:
case 265:
case 2303:
case 2219:
case 625:
case 2853:
case 529:
case 3552:
case 1983:
case 1261:
case 454:
case 990:
case 1806:
case 3036:
case 3763:
case 3275:
case 4073:
case 2097:
case 3720:
case 3843:
case 1515:
case 2658:
case 3819:
case 2570:
case 2547:
case 3253:
case 2092:
case 2909:
case 1458:
case 897:
case 310:
case 3566:
case 3908:
case 2939:
case 313:
case 2818:
case 3659:
case 3472:
case 3686:
case 1796:
case 3127:
case 157:
case 1391:
case 3440:
case 48:
case 1836:
case 321:
case 3218:
case 2450:
case 964:
case 1578:
case 1650:
case 3594:
case 3621:
case 281:
case 2333:
case 842:
case 784:
case 817:
case 3184:
case 2649:
case 2165:
case 65:
case 3208:
case 3680:
case 3446:
case 1667:
case 558:
case 2083:
case 2395:
case 1403:
case 280:
case 1154:
case 2462:
case 391:
case 446:
case 2119:
case 3799:
case 1689:
case 3918:
case 3175:
case 3071:
case 1065:
case 1009:
case 2456:
case 3153:
case 1535:
case 334:
case 1656:
case 320:
case 2425:
case 2918:
case 608:
case 571:
case 1144:
case 2839:
case 614:
case 3489:
case 3808:
case 1038:
case 537:
case 49:
case 234:
case 1568:
case 3358:
case 220:
case 731:
case 3239:
case 2208:
case 335:
case 2680:
case 3143:
case 2446:
case 3603:
case 3083:
case 3395:
case 156:
case 1646:
case 794:
case 3462:
case 3119:
case 1930:
case 1053:
case 138:
case 3531:
case 42:
case 1075:
case 1728:
case 381:
case 3061:
case 3333:
case 2044:
case 1171:
case 290:
case 3649:
case 2138:
case 3109:
case 3939:
case 570:
case 1614:
case 412:
case 213:
case 3818:
case 2659:
case 1892:
case 2472:
case 2414:
case 1388:
case 724:
case 839:
case 2440:
case 1334:
case 221:
case 1100:
case 2006:
case 1510:
case 3499:
case 1094:
case 2266:
case 609:
case 1168:
case 3247:
case 505:
case 3857:
case 78:
case 3242:
case 654:
case 4050:
case 2923:
case 3976:
case 1544:
case 3302:
case 2364:
case 3341:
case 2870:
case 2252:
case 3093:
case 1490:
case 3201:
case 425:
case 3866:
case 484:
case 2762:
case 2842:
case 3565:
case 2750:
case 139:
case 2584:
case 1355:
case 3211:
case 3947:
case 1749:
case 1824:
case 4089:
case 3942:
case 746:
case 3131:
case 2194:
case 3276:
case 2068:
case 3035:
case 1373:
case 872:
case 1805:
case 682:
case 1500:
case 1882:
case 2811:
case 3772:
case 3714:
case 1979:
case 3632:
case 3901:
case 495:
case 3637:
case 3823:
case 1496:
case 4067:
case 1887:
case 452:
case 253:
case 3312:
case 838:
case 1432:
case 2772:
case 2714:
case 2632:
case 142:
case 3876:
case 2637:
case 2740:
case 2823:
case 1205:
case 1269:
case 1437:
case 353:
case 1345:
case 3696:
case 1786:
case 2312:
case 4046:
case 2374:
case 1381:
case 2509:
case 3966:
case 3750:
case 3584:
case 1282:
case 2211:
case 2947:
case 2131:
case 4004:
case 950:
case 2276:
case 3068:
case 3223:
case 494:
case 2035:
case 3364:
case 2746:
case 655:
case 2341:
case 3870:
case 3847:
case 4077:
case 1969:
case 4072:
case 1905:
case 2543:
case 72:
case 1924:
case 207:
case 541:
case 1879:
case 1031:
case 2307:
case 3801:
case 485:
case 2725:
case 2499:
case 1135:
case 2247:
case 1320:
case 747:
case 2911:
case 2852:
case 1982:
case 2242:
case 3756:
case 3960:
case 1215:
case 424:
case 949:
case 3575:
case 351:
case 2332:
case 127:
case 232:
case 433:
case 647:
case 1645:
case 2788:
case 3396:
case 3791:
case 1001:
case 2337:
case 2894:
case 2445:
case 461:
case 3498:
case 1124:
case 1474:
case 2481:
case 2015:
case 62:
case 2111:
case 1935:
case 3455:
case 278:
case 3160:
case 1278:
case 2328:
case 755:
case 2176:
case 1441:
case 953:
case 1485:
case 3629:
case 3390:
case 197:
case 2101:
case 2641:
case 4088:
case 4034:
case 2539:
case 2463:
case 3166:
case 2087:
case 1399:
case 69:
case 2147:
case 722:
case 1663:
case 2607:
case 1076:
case 2420:
case 2170:
case 1235:
case 3994:
case 408:
case 174:
case 2142:
case 2602:
case 414:
case 1402:
case 460:
case 250:
case 1060:
case 3463:
case 2166:
case 3087:
case 3147:
case 3170:
case 3142:
case 3602:
case 3082:
case 1464:
case 3005:
case 844:
case 3069:
case 175:
case 1835:
case 415:
case 3101:
case 1179:
case 3024:
case 3685:
case 1429:
case 3539:
case 187:
case 249:
case 45:
case 1968:
case 2455:
case 169:
case 378:
case 1066:
case 36:
case 2518:
case 2473:
case 3176:
case 2123:
case 3426:
case 251:
case 907:
case 754:
case 3617:
case 68:
case 1057:
case 1052:
case 709:
case 3674:
case 868:
case 2791:
case 1878:
case 3337:
case 2498:
case 7:
case 2831:
case 3481:
case 1605:
case 171:
case 2112:
case 2237:
case 2174:
case 1624:
case 411:
case 423:
case 222:
case 137:
case 3990:
case 2117:
case 2896:
case 2020:
case 1687:
case 1476:
case 4030:
case 2736:
case 556:
case 2676:
case 2487:
case 3837:
case 3394:
case 3623:
case 3832:
case 2482:
case 1411:
case 1682:
case 3792:
case 1999:
case 2611:
case 805:
case 255:
case 2937:
case 3548:
case 76:
case 3657:
case 538:
case 2595:
case 1401:
case 3652:
case 292:
case 98:
case 2045:
case 3479:
case 1012:
case 2081:
case 607:
case 2601:
case 2932:
case 2185:
case 1615:
case 2642:
case 3055:
case 2102:
case 2928:
case 2415:
case 464:
case 410:
case 572:
case 309:
case 3666:
case 2890:
case 3073:
case 4036:
case 1470:
case 1299:
case 2730:
case 2107:
case 1163:
case 2558:
case 3642:
case 2055:
case 3928:
case 209:
case 2666:
case 1368:
case 3890:
case 254:
case 751:
case 3647:
case 1466:
case 92:
case 3730:
case 3670:
case 3937:
case 136:
case 3595:
case 947:
case 392:
case 3045:
case 2479:
case 3081:
case 1739:
case 3601:
case 2290:
case 749:
case 1679:
case 3185:
case 3896:
case 3020:
case 31:
case 1423:
case 1460:
case 3736:
case 3331:
case 3487:
case 2837:
case 2394:
case 2623:
case 479:
case 1155:
case 99:
case 1051:
case 2828:
case 3237:
case 3112:
case 3424:
case 818:
case 3174:
case 1064:
case 2296:
case 3469:
case 3117:
case 753:
case 1973:
case 3710:
case 3202:
case 650:
case 1504:
case 3342:
case 1955:
case 3435:
case 3864:
case 2761:
case 199:
case 706:
case 3829:
case 1668:
case 3744:
case 91:
case 166:
case 1719:
case 3851:
case 2357:
case 246:
case 922:
case 3503:
case 2754:
case 435:
case 3706:
case 2807:
case 4083:
case 1096:
case 2264:
case 3241:
case 649:
case 481:
case 1765:
case 3902:
case 32:
case 1709:
case 3376:
case 2694:
case 4061:
case 2951:
case 843:
case 2874:
case 3478:
case 2817:
case 3700:
case 3137:
case 3212:
case 1298:
case 2559:
case 651:
case 1572:
case 28:
case 1514:
case 2196:
case 1090:
case 2929:
case 1577:
case 347:
case 3941:
case 3217:
case 2586:
case 2964:
case 2700:
case 2274:
case 1324:
case 1873:
case 1305:
case 38:
case 632:
case 4006:
case 544:
case 3929:
case 189:
case 413:
case 247:
case 1855:
case 173:
case 2941:
case 2132:
case 2217:
case 3964:
case 167:
case 2902:
case 1738:
case 22:
case 2631:
case 1678:
case 2376:
case 1550:
case 2771:
case 3323:
case 1898:
case 678:
case 3360:
case 3951:
case 501:
case 1431:
case 3874:
case 2478:
case 2099:
case 1382:
case 1920:
case 2311:
case 3817:
case 909:
case 1963:
case 4010:
case 2907:
case 3521:
case 2974:
case 1981:
case 2912:
case 2851:
case 102:
case 3357:
case 1567:
case 1032:
case 3754:
case 3580:
case 1037:
case 1562:
case 3807:
case 3352:
case 4000:
case 29:
case 2202:
case 434:
case 420:
case 1315:
case 1753:
case 4016:
case 1220:
case 3885:
case 2435:
case 2864:
case 3841:
case 4071:
case 2829:
case 3366:
case 1199:
case 2207:
case 1263:
case 762:
case 3671:
case 2794:
case 1609:
case 812:
case 1089:
case 2465:
case 1958:
case 1056:
case 2150:
case 2392:
case 1113:
case 328:
case 2683:
case 3140:
case 2291:
case 1483:
case 3080:
case 2003:
case 550:
case 195:
case 288:
case 3172:
case 3453:
case 1050:
case 918:
case 2599:
case 1258:
case 2013:
case 551:
case 3125:
case 3475:
case 2049:
case 2661:
case 398:
case 3104:
case 1768:
case 3059:
case 3934:
case 2162:
case 176:
case 1619:
case 3988:
case 549:
case 2654:
case 2419:
case 645:
case 3606:
case 89:
case 1643:
case 2167:
case 1295:
case 578:
case 2934:
case 601:
case 3991:
case 1858:
case 1590:
case 1072:
case 56:
case 2086:
case 1248:
case 738:
case 1180:
case 3167:
case 1406:
case 2453:
case 3599:
case 1653:
case 130:
case 846:
case 1895:
case 644:
case 2021:
case 3661:
case 2644:
case 185:
case 2177:
case 3683:
case 2234:
case 1046:
case 3291:
case 1186:
case 442:
case 243:
case 1596:
case 2114:
case 163:
case 194:
case 2671:
case 3794:
case 2731:
case 1121:
case 3397:
case 3834:
case 1471:
case 2484:
case 2438:
case 1004:
case 3888:
case 3465:
case 2891:
case 3392:
case 2616:
case 88:
case 1416:
case 228:
case 2940:
case 3354:
case 3262:
case 3757:
case 1564:
case 988:
case 854:
case 768:
case 809:
case 497:
case 2889:
case 2408:
case 1959:
case 2972:
case 3825:
case 1148:
case 2701:
case 1608:
case 3520:
case 4011:
case 2742:
case 3256:
case 160:
case 1715:
case 474:
case 108:
case 562:
case 2862:
case 2310:
case 3950:
case 3361:
case 2770:
case 1551:
case 3289:
case 2630:
case 4001:
case 744:
case 2277:
case 1705:
case 882:
case 672:
case 2134:
case 1724:
case 3383:
case 1849:
case 3095:
case 1286:
case 2048:
case 241:
case 427:
case 3581:
case 133:
case 2214:
case 1322:
case 3697:
case 1787:
case 44:
case 2776:
case 3723:
case 2371:
case 1384:
case 3877:
case 2573:
case 2418:
case 2925:
case 3250:
case 2904:
case 218:
case 1782:
case 2316:
case 1618:
case 3989:
case 2697:
case 3555:
case 2760:
case 1886:
case 1133:
case 2956:
case 4066:
case 1497:
case 3776:
case 3371:
case 2723:
case 3636:
case 2877:
case 745:
case 2814:
case 1492:
case 3925:
case 1213:
case 2058:
case 3904:
case 318:
case 3316:
case 3711:
case 2191:
case 3134:
case 2383:
case 4052:
case 1517:
case 3048:
case 3300:
case 3598:
case 1574:
case 2581:
case 1903:
case 3214:
case 657:
case 3742:
case 2256:
case 928:
case 340:
case 506:
case 2563:
case 1502:
case 3867:
case 553:
case 3225:
case 4023:
case 3344:
case 3204:
case 3770:
case 1913:
case 4060:
case 3747:
case 3630:
case 3940:
case 2354:
case 2262:
case 2757:
case 1585:
case 3856:
case 1541:
case 426:
case 3246:
case 1343:
case 3889:
case 2439:
case 3408:
case 1779:
case 3972:
case 1195:
case 1203:
case 2825:
case 475:
case 3306:
case 2861:
case 1922:
case 1380:
case 2206:
case 2448:
case 3367:
case 193:
case 2346:
case 704:
case 4074:
case 52:
case 2741:
case 759:
case 4017:
case 2900:
case 1552:
case 2579:
case 3362:
case 3810:
case 1927:
case 850:
case 1843:
case 2304:
case 3515:
case 2325:
case 3806:
case 2244:
case 40:
case 2130:
case 2707:
case 1763:
case 3458:
case 1938:
case 2702:
case 2971:
case 110:
case 741:
case 1566:
case 2854:
case 547:
case 1819:
case 3751:
case 512:
case 470:
case 1253:
case 2018:
case 244:
case 2906:
case 1222:
case 3505:
case 3569:
case 2314:
case 1359:
case 123:
case 437:
case 643:
case 2200:
case 2688:
case 1781:
case 2774:
case 1488:
case 2377:
case 3039:
case 1434:
case 3587:
case 2944:
case 3350:
case 3961:
case 1118:
case 1321:
case 1726:
case 2271:
case 3800:
case 2883:
case 2136:
case 851:
case 3216:
case 183:
case 1313:
case 300:
case 4051:
case 546:
case 2350:
case 2197:
case 3910:
case 832:
case 37:
case 1209:
case 458:
case 1633:
case 3271:
case 3883:
case 1349:
case 3136:
case 3906:
case 3372:
case 2505:
case 903:
case 3314:
case 2524:
case 3712:
case 688:
case 2691:
case 1919:
case 3774:
case 2283:
case 3634:
case 1838:
case 4029:
case 1542:
case 1097:
case 3304:
case 2515:
case 2806:
case 3130:
case 1909:
case 2458:
case 1965:
case 705:
case 1658:
case 2356:
case 938:
case 1570:
case 1092:
case 344:
case 165:
case 3206:
case 2495:
case 3448:
case 1303:
case 245:
case 1139:
case 436:
case 3900:
case 2983:
case 972:
case 2362:
case 2810:
case 2578:
case 338:
case 944:
case 2292:
case 3930:
case 3053:
case 1450:
case 3421:
case 3171:
case 1165:
case 1109:
case 3236:
case 862:
case 3728:
case 1333:
case 509:
case 372:
case 83:
case 3732:
case 5:
case 1054:
case 1939:
case 3672:
case 3677:
case 2796:
case 3388:
case 2391:
case 257:
case 3897:
case 901:
case 1489:
case 1808:
case 3084:
case 3038:
case 2065:
case 2689:
case 2992:
case 3230:
case 3604:
case 1358:
case 2656:
case 968:
case 2997:
case 1456:
case 900:
case 3568:
case 1395:
case 3646:
case 356:
case 2403:
case 1467:
case 3106:
case 3027:
case 2790:
case 2662:
case 1119:
case 2154:
case 1462:
case 303:
case 2480:
case 2646:
case 1348:
case 256:
case 1000:
case 3403:
case 2106:
case 2027:
case 4037:
case 2022:
case 203:
case 2625:
case 1839:
case 1071:
case 2084:
case 2038:
case 3065:
case 3009:
case 3689:
case 2144:
case 120:
case 1016:
case 2110:
case 1153:
case 2568:
case 3535:
case 2892:
case 3593:
case 467:
case 1414:
case 489:
case 113:
case 3836:
case 2677:
case 121:
case 2737:
case 2640:
case 1686:
case 1477:
case 1127:
case 3043:
case 2897:
case 3578:
case 1594:
case 2116:
case 3413:
case 1010:
case 853:
case 1218:
case 555:
case 2930:
case 2053:
case 659:
case 604:
case 2421:
case 1184:
case 3297:
case 1621:
case 2728:
case 2075:
case 2279:
case 1767:
case 820:
case 636:
case 1364:
case 1870:
case 834:
case 1252:
case 2490:
case 1257:
case 3924:
case 55:
case 2815:
case 216:
case 2506:
case 927:
case 3969:
case 1762:
case 2168:
case 891:
case 4049:
case 2510:
case 1801:
case 94:
case 1266:
case 2544:
case 1575:
case 3215:
case 488:
case 317:
case 3583:
case 1811:
case 2887:
case 153:
case 1957:
case 2398:
case 1696:
case 3381:
case 997:
case 1876:
case 1522:
case 3193:
case 3205:
case 4003:
case 658:
case 3282:
case 1538:
case 1966:
case 1584:
case 2571:
case 766:
case 1068:
case 2805:
case 3721:
case 2869:
case 3178:
case 1260:
case 1970:
case 2282:
case 1947:
case 3355:
case 1509:
case 428:
case 339:
case 3805:
case 3373:
case 2721:
case 2326:
case 3869:
case 702:
case 13:
case 2287:
case 3824:
case 3749:
case 2178:
case 1772:
case 560:
case 926:
case 1632:
case 3500:
case 3882:
case 2759:
case 671:
case 881:
case 1860:
case 2786:
case 1374:
case 4080:
case 637:
case 1823:
case 2193:
case 2205:
case 1777:
case 2269:
case 789:
case 1270:
case 2135:
case 2699:
case 1911:
case 1852:
case 2320:
case 1307:
case 2363:
case 3510:
case 2031:
case 1499:
case 767:
case 670:
case 3094:
case 2561:
case 3544:
case 1976:
case 1302:
case 1242:
case 1857:
case 60:
case 835:
case 3279:
case 3703:
case 1201:
case 2780:
case 1746:
case 1519:
case 1341:
case 1093:
case 3490:
case 2924:
case 2905:
case 1111:
case 3968:
case 178:
case 418:
case 1015:
case 2047:
case 3893:
case 2592:
case 2070:
case 3733:
case 2278:
case 3066:
case 2187:
case 2626:
case 1231:
case 1617:
case 916:
case 524:
case 3057:
case 2417:
case 530:
case 3878:
case 1445:
case 2124:
case 585:
case 1734:
case 2645:
case 2169:
case 1612:
case 441:
case 689:
case 396:
case 879:
case 4048:
case 1147:
case 1607:
case 2663:
case 737:
case 2076:
case 3023:
case 2235:
case 1170:
case 2407:
case 1463:
case 2620:
case 1087:
case 3530:
case 2011:
case 3758:
case 2402:
case 2115:
case 274:
case 1602:
case 1101:
case 297:
case 1641:
case 3464:
case 602:
case 1069:
case 2441:
case 2485:
case 2993:
case 810:
case 397:
case 3748:
case 2179:
case 1152:
case 3441:
case 719:
case 2835:
case 275:
case 1629:
case 1157:
case 758:
case 226:
case 3663:
case 552:
case 4033:
case 2060:
case 150:
case 1166:
case 3620:
case 595:
case 3011:
case 386:
case 699:
case 3402:
case 3115:
case 893:
case 2057:
case 3417:
case 151:
case 3001:
case 1079:
case 3124:
case 848:
case 3474:
case 4095:
case 2052:
case 3105:
case 3645:
case 3681:
case 2536:
case 3182:
case 811:
case 3935:
case 269:
case 1455:
case 287:
case 584:
case 149:
case 2655:
case 3047:
case 2893:
case 1473:
case 34:
case 3070:
case 3278:
case 2733:
case 1160:
case 1294:
case 2066:
case 736:
case 823:
case 47:
case 2007:
case 1063:
case 1331:
case 358:
case 1896:
case 3173:
case 2687:
case 2476:
case 11:
case 2682:
case 2718:
case 1611:
case 2999:
case 3051:
case 319:
case 1482:
case 1533:
case 2411:
case 797:
case 2002:
case 617:
case 1405:
case 774:
case 2041:
case 2624:
case 2393:
case 2605:
case 2669:
case 271:
case 1237:
case 1174:
case 2181:
case 966:
case 520:
case 122:
case 534:
case 3534:
case 237:
case 2591:
case 1928:
case 2442:
case 815:
case 929:
case 2615:
case 444:
case 1642:
case 2299:
case 2163:
case 1107:
case 1558:
case 521:
case 1670:
case 2120:
case 1026:
case 20:
case 2470:
case 2017:
case 1595:
case 3457:
case 74:
case 1937:
case 155:
case 3452:
case 1601:
case 1141:
case 2708:
case 590:
case 1185:
case 3899:
case 2401:
case 1045:
case 2012:
case 1081:
case 2074:
case 236:
case 3017:
case 989:
case 973:
case 967:
case 1164:
case 3708:
case 814:
case 2679:
case 3401:
case 445:
case 769:
case 808:
case 616:
case 3074:
case 3442:
case 3615:
case 1:
case 1055:
case 3299:
case 2466:
case 3447:
case 1666:
case 2368:
case 3120:
case 30:
case 3470:
case 1296:
case 2064:
case 3041:
case 3393:
case 3605:
case 3145:
case 2198:
case 4039:
case 2029:
case 1990:
case 2534:
case 3591:
case 2460:
case 1623:
case 1394:
case 258:
case 639:
case 2173:
case 3687:
case 3476:
case 2423:
case 3126:
case 861:
case 3999:
case 2051:
case 3411:
case 2155:
case 146:
case 1802:
case 583:
case 3032:
case 1754:
case 266:
case 2719:
case 885:
case 579:
case 3945:
case 302:
case 1357:
case 2743:
case 2820:
case 1264:
case 1190:
case 1229:
case 1807:
case 2504:
case 3753:
case 1761:
case 1366:
case 2668:
case 4065:
case 3775:
case 1885:
case 3556:
case 3305:
case 2572:
case 2514:
case 2826:
case 3369:
case 1196:
case 3727:
case 2090:
case 3281:
case 1783:
case 3693:
case 373:
case 1586:
case 4019:
case 1964:
case 1929:
case 3722:
case 1360:
case 3898:
case 669:
case 1874:
case 2273:
case 2765:
case 687:
case 1323:
case 1694:
case 3784:
case 229:
case 1521:
case 3963:
case 2255:
case 1513:
case 895:
case 3881:
case 2431:
case 1099:
case 2387:
case 3845:
case 1128:
case 2226:
case 3709:
case 1376:
case 1771:
case 2550:
case 438:
case 329:
case 852:
case 2382:
case 1716:
case 4053:
case 3255:
case 1311:
case 2305:
case 3514:
case 627:
case 1493:
case 3298:
case 1274:
case 2245:
case 1985:
case 472:
case 273:
case 1132:
case 936:
case 289:
case 3540:
case 3577:
case 147:
case 2315:
case 825:
case 2589:
case 1202:
case 3973:
case 919:
case 399:
case 876:
case 4084:
case 511:
case 3668:
case 686:
case 1829:
case 2263:
case 1207:
case 2556:
case 674:
case 742:
case 884:
case 958:
case 1503:
case 548:
case 4022:
case 2032:
case 3719:
case 3998:
case 2945:
case 403:
case 202:
case 3743:
case 3820:
case 1285:
case 3096:
case 4027:
case 1301:
case 1706:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753884001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,];
var gg_b = "1753884001/";

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
