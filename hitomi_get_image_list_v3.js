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
case 355:
case 3461:
case 629:
case 2637:
case 3181:
case 1109:
case 1110:
case 2855:
case 723:
case 2434:
case 3226:
case 2629:
case 2390:
case 3182:
case 413:
case 2975:
case 3270:
case 1511:
case 3121:
case 1636:
case 792:
case 4040:
case 2689:
case 1597:
case 1952:
case 811:
case 3422:
case 1871:
case 1695:
case 2775:
case 324:
case 2047:
case 407:
case 1872:
case 3560:
case 2000:
case 2019:
case 1951:
case 2633:
case 3652:
case 3386:
case 772:
case 2290:
case 3736:
case 2596:
case 443:
case 3162:
case 161:
case 1046:
case 639:
case 106:
case 2701:
case 3094:
case 3161:
case 243:
case 2397:
case 1679:
case 1765:
case 1418:
case 597:
case 3834:
case 3554:
case 3455:
case 3539:
case 3859:
case 2861:
case 1149:
case 2799:
case 859:
case 3527:
case 2630:
case 553:
case 1492:
case 2056:
case 4047:
case 1985:
case 1024:
case 3714:
case 1:
case 3277:
case 604:
case 4000:
case 3587:
case 4019:
case 3344:
case 2416:
case 3377:
case 4048:
case 780:
case 3523:
case 25:
case 3665:
case 320:
case 1335:
case 3779:
case 1113:
case 577:
case 54:
case 1725:
case 1058:
case 4074:
case 2742:
case 2882:
case 2312:
case 2297:
case 1449:
case 1845:
case 663:
case 769:
case 1064:
case 1308:
case 1452:
case 1240:
case 3136:
case 902:
case 2324:
case 1621:
case 3762:
case 2357:
case 1451:
case 2101:
case 3761:
case 1207:
case 3495:
case 1622:
case 156:
case 3610:
case 1681:
case 2547:
case 746:
case 2175:
case 341:
case 1682:
case 834:
case 436:
case 3981:
case 2500:
case 3232:
case 1910:
case 560:
case 1662:
case 438:
case 3332:
case 1203:
case 152:
case 2548:
case 1830:
case 1011:
case 3080:
case 3076:
case 2934:
case 2353:
case 1098:
case 3961:
case 1256:
case 426:
case 650:
case 906:
case 2879:
case 2284:
case 748:
case 481:
case 1012:
case 1307:
case 3841:
case 2401:
case 3020:
case 1151:
case 2257:
case 305:
case 3195:
case 765:
case 3781:
case 1709:
case 1710:
case 1152:
case 742:
case 2402:
case 3842:
case 3782:
case 2543:
case 1340:
case 1200:
case 1219:
case 2916:
case 2142:
case 1348:
case 4035:
case 1553:
case 2141:
case 1185:
case 1465:
case 3755:
case 9:
case 2895:
case 2671:
case 1247:
case 3023:
case 20:
case 2507:
case 3649:
case 3067:
case 2605:
case 226:
case 238:
case 3179:
case 1558:
case 1838:
case 830:
case 1090:
case 3617:
case 1343:
case 1125:
case 2540:
case 3414:
case 547:
case 1918:
case 293:
case 1524:
case 1425:
case 820:
case 57:
case 1829:
case 3114:
case 3955:
case 3087:
case 228:
case 3875:
case 3479:
case 635:
case 1165:
case 2199:
case 2442:
case 3063:
case 809:
case 1913:
case 1248:
case 2083:
case 3672:
case 3142:
case 332:
case 843:
case 794:
case 549:
case 405:
case 1852:
case 3499:
case 3671:
case 3895:
case 1851:
case 1531:
case 1972:
case 3141:
case 373:
case 786:
case 4080:
case 30:
case 721:
case 1905:
case 3540:
case 807:
case 1130:
case 2088:
case 2955:
case 1430:
case 2692:
case 393:
case 731:
case 2068:
case 1772:
case 3508:
case 3346:
case 2479:
case 163:
case 2875:
case 2691:
case 1394:
case 954:
case 328:
case 3199:
case 2039:
case 2613:
case 935:
case 322:
case 3503:
case 1086:
case 3442:
case 3250:
case 4039:
case 602:
case 3324:
case 3258:
case 1215:
case 575:
case 3102:
case 3734:
case 2899:
case 2495:
case 3101:
case 1189:
case 1469:
case 1044:
case 2982:
case 4068:
case 3175:
case 129:
case 3264:
case 3645:
case 2609:
case 1129:
case 2232:
case 3500:
case 2981:
case 3519:
case 241:
case 1073:
case 1429:
case 4067:
case 1825:
case 3353:
case 2076:
case 3959:
case 4023:
case 211:
case 587:
case 2721:
case 2332:
case 3475:
case 606:
case 1437:
case 3364:
case 62:
case 1077:
case 2195:
case 205:
case 3257:
case 2020:
case 1489:
case 1169:
case 3035:
case 3543:
case 2842:
case 3402:
case 2436:
case 3358:
case 3799:
case 3861:
case 2859:
case 2539:
case 3212:
case 1930:
case 2554:
case 2455:
case 3397:
case 491:
case 3862:
case 1586:
case 2979:
case 2563:
case 3630:
case 1642:
case 2568:
case 3941:
case 826:
case 1172:
case 767:
case 125:
case 2587:
case 1641:
case 2277:
case 1171:
case 3116:
case 881:
case 1220:
case 35:
case 220:
case 471:
case 1320:
case 2244:
case 135:
case 893:
case 3416:
case 2377:
case 1699:
case 2588:
case 1730:
case 836:
case 2278:
case 3821:
case 3882:
case 1566:
case 1260:
case 1376:
case 2155:
case 1809:
case 1031:
case 3881:
case 1405:
case 2914:
case 3297:
case 822:
case 3741:
case 154:
case 2226:
case 562:
case 3459:
case 929:
case 3855:
case 3434:
case 2461:
case 2520:
case 1929:
case 1891:
case 1287:
case 255:
case 1769:
case 1818:
case 3975:
case 2462:
case 1388:
case 409:
case 1892:
case 1263:
case 1602:
case 2576:
case 3901:
case 1989:
case 2286:
case 2270:
case 1813:
case 3689:
case 656:
case 900:
case 1239:
case 1328:
case 1933:
case 658:
case 2651:
case 501:
case 3669:
case 3047:
case 1339:
case 224:
case 3775:
case 1228:
case 627:
case 1737:
case 2995:
case 58:
case 2370:
case 1363:
case 3019:
case 3000:
case 566:
case 1969:
case 1368:
case 3596:
case 3290:
case 652:
case 1578:
case 1849:
case 1387:
case 2161:
case 3134:
case 2094:
case 150:
case 1223:
case 1267:
case 1938:
case 1264:
case 2097:
case 655:
case 683:
case 3137:
case 2681:
case 3129:
case 1814:
case 3945:
case 1500:
case 1519:
case 2910:
case 1206:
case 2303:
case 2356:
case 3438:
case 546:
case 1096:
case 518:
case 2621:
case 1102:
case 2308:
case 671:
case 2240:
case 2207:
case 300:
case 1759:
case 2451:
case 1357:
case 634:
case 3865:
case 3469:
case 237:
case 1257:
case 2710:
case 2709:
case 3169:
case 1035:
case 3885:
case 2151:
case 3315:
case 548:
case 3133:
case 2152:
case 850:
case 2093:
case 1224:
case 1358:
case 1402:
case 2830:
case 2256:
case 565:
case 3429:
case 2098:
case 3825:
case 1548:
case 1306:
case 2203:
case 252:
case 1879:
case 1475:
case 2012:
case 1284:
case 3634:
case 3659:
case 542:
case 691:
case 339:
case 943:
case 1507:
case 1605:
case 825:
case 3905:
case 1540:
case 2949:
case 2125:
case 2558:
case 2838:
case 4012:
case 1672:
case 2833:
case 458:
case 3532:
case 3066:
case 2200:
case 2506:
case 132:
case 764:
case 4093:
case 304:
case 1895:
case 1671:
case 2564:
case 2869:
case 630:
case 3851:
case 2718:
case 717:
case 620:
case 95:
case 2889:
case 1441:
case 2485:
case 2300:
case 2319:
case 2248:
case 122:
case 854:
case 2829:
case 2524:
case 3430:
case 1508:
case 835:
case 3772:
case 2991:
case 703:
case 363:
case 2992:
case 128:
case 2557:
case 2655:
case 1048:
case 202:
case 829:
case 3263:
case 2636:
case 523:
case 3383:
case 3738:
case 1901:
case 3601:
case 3239:
case 3254:
case 1074:
case 1637:
case 3929:
case 4053:
case 1459:
case 1855:
case 3323:
case 23:
case 4006:
case 3287:
case 576:
case 1390:
case 1975:
case 3268:
case 3892:
case 641:
case 4064:
case 1043:
case 2752:
case 1638:
case 261:
case 584:
case 3817:
case 4084:
case 1596:
case 3288:
case 1702:
case 1159:
case 2409:
case 2410:
case 3849:
case 3387:
case 3938:
case 3789:
case 206:
case 3267:
case 3223:
case 1047:
case 3228:
case 1775:
case 2597:
case 572:
case 2695:
case 3729:
case 3969:
case 4:
case 3327:
case 1019:
case 2951:
case 533:
case 3642:
case 1941:
case 1293:
case 107:
case 2057:
case 1116:
case 1942:
case 753:
case 785:
case 2235:
case 938:
case 2925:
case 1799:
case 1861:
case 2149:
case 2491:
case 2679:
case 2418:
case 926:
case 4046:
case 461:
case 3586:
case 3570:
case 3276:
case 1211:
case 981:
case 3260:
case 2006:
case 3032:
case 408:
case 2192:
case 2417:
case 993:
case 3380:
case 1311:
case 2845:
case 3810:
case 3405:
case 3504:
case 2064:
case 354:
case 957:
case 4050:
case 15:
case 2335:
case 3699:
case 1822:
case 863:
case 2590:
case 2296:
case 569:
case 2058:
case 1821:
case 3472:
case 2965:
case 3396:
case 632:
case 2642:
case 1714:
case 959:
case 2220:
case 1587:
case 1344:
case 1685:
case 60:
case 3679:
case 3765:
case 626:
case 2105:
case 638:
case 1834:
case 1859:
case 2930:
case 1563:
case 3117:
case 1373:
case 450:
case 2280:
case 2586:
case 799:
case 544:
case 3614:
case 1583:
case 693:
case 3006:
case 657:
case 1528:
case 254:
case 3118:
case 1155:
case 3064:
case 2504:
case 2809:
case 2810:
case 2031:
case 636:
case 2699:
case 3335:
case 1523:
case 120:
case 1567:
case 1015:
case 1588:
case 2730:
case 3725:
case 622:
case 2738:
case 3050:
case 1121:
case 2383:
case 3598:
case 1270:
case 171:
case 435:
case 2227:
case 1936:
case 1122:
case 2328:
case 3512:
case 2239:
case 134:
case 2601:
case 2813:
case 1304:
case 2287:
case 308:
case 2675:
case 3751:
case 2367:
case 3109:
case 3110:
case 2145:
case 1181:
case 3752:
case 2892:
case 2937:
case 2268:
case 3593:
case 2733:
case 856:
case 2288:
case 911:
case 540:
case 2578:
case 1736:
case 3046:
case 827:
case 2368:
case 701:
case 1094:
case 32:
case 191:
case 1326:
case 306:
case 2849:
case 3805:
case 2445:
case 1481:
case 3410:
case 2737:
case 3695:
case 3952:
case 1651:
case 2228:
case 3951:
case 1266:
case 425:
case 2363:
case 3872:
case 2327:
case 2969:
case 2729:
case 1995:
case 1652:
case 1386:
case 1067:
case 1649:
case 3917:
case 749:
case 594:
case 1179:
case 3713:
case 3838:
case 439:
case 1515:
case 1414:
case 3949:
case 1617:
case 2130:
case 4077:
case 3506:
case 3348:
case 3200:
case 3219:
case 3833:
case 586:
case 2004:
case 930:
case 2851:
case 3869:
case 3564:
case 607:
case 204:
case 521:
case 3247:
case 3374:
case 1613:
case 1054:
case 3584:
case 3485:
case 1039:
case 3347:
case 3889:
case 3274:
case 65:
case 2705:
case 2070:
case 1027:
case 3913:
case 3319:
case 4044:
case 3991:
case 429:
case 2430:
case 3524:
case 1692:
case 3829:
case 613:
case 1087:
case 2771:
case 1479:
case 263:
case 909:
case 1618:
case 4073:
case 955:
case 983:
case 775:
case 1610:
case 802:
case 3097:
case 1231:
case 3303:
case 1232:
case 3909:
case 2945:
case 1981:
case 3452:
case 3240:
case 751:
case 3546:
case 3308:
case 971:
case 2078:
case 3621:
case 2433:
case 2469:
case 2044:
case 934:
case 1594:
case 3622:
case 1020:
case 787:
case 3151:
case 2885:
case 3307:
case 2169:
case 1195:
case 3709:
case 3710:
case 2745:
case 1781:
case 861:
case 924:
case 806:
case 3093:
case 82:
case 570:
case 4004:
case 3340:
case 3208:
case 3203:
case 352:
case 2138:
case 3662:
case 1721:
case 2825:
case 2429:
case 1961:
case 3550:
case 3011:
case 239:
case 1331:
case 2634:
case 3012:
case 1962:
case 1773:
case 1824:
case 3100:
case 2920:
case 1529:
case 3448:
case 1977:
case 2693:
case 3285:
case 1857:
case 940:
case 3365:
case 2612:
case 170:
case 633:
case 2061:
case 1279:
case 739:
case 2976:
case 1884:
case 2980:
case 3059:
case 505:
case 449:
case 2230:
case 3502:
case 3796:
case 1778:
case 672:
case 3225:
case 2536:
case 2062:
case 2330:
case 3143:
case 1853:
case 698:
case 1214:
case 3673:
case 1379:
case 1973:
case 275:
case 1569:
case 1864:
case 1777:
case 2081:
case 1045:
case 676:
case 2807:
case 692:
case 541:
case 3996:
case 910:
case 3678:
case 3400:
case 1944:
case 1696:
case 2840:
case 1538:
case 251:
case 2939:
case 1850:
case 84:
case 2115:
case 1236:
case 3352:
case 3670:
case 877:
case 3408:
case 182:
case 2848:
case 37:
case 2874:
case 1970:
case 1395:
case 2289:
case 3107:
case 2369:
case 347:
case 4021:
case 3351:
case 944:
case 2968:
case 4082:
case 188:
case 2237:
case 1704:
case 219:
case 1131:
case 475:
case 2843:
case 4081:
case 2338:
case 2229:
case 3456:
case 1926:
case 131:
case 2238:
case 3103:
case 39:
case 2923:
case 853:
case 885:
case 1432:
case 559:
case 2727:
case 3894:
case 2754:
case 4062:
case 249:
case 2269:
case 1071:
case 967:
case 495:
case 3251:
case 2983:
case 3604:
case 1295:
case 2847:
case 2800:
case 1904:
case 2415:
case 1072:
case 2768:
case 194:
case 3108:
case 2928:
case 2233:
case 3666:
case 648:
case 616:
case 3867:
case 3823:
case 2522:
case 3318:
case 1473:
case 1890:
case 524:
case 2646:
case 1038:
case 4079:
case 2180:
case 2176:
case 479:
case 3743:
case 1033:
case 3883:
case 3947:
case 642:
case 2120:
case 1545:
case 3919:
case 3135:
case 2271:
case 140:
case 2095:
case 3839:
case 2794:
case 1144:
case 1674:
case 3948:
case 2371:
case 2562:
case 2036:
case 1648:
case 3827:
case 583:
case 3196:
case 3863:
case 3292:
case 3719:
case 2160:
case 2476:
case 618:
case 3349:
case 499:
case 3747:
case 571:
case 1255:
case 34:
case 2423:
case 2664:
case 1361:
case 3631:
case 2467:
case 377:
case 754:
case 2245:
case 3209:
case 3210:
case 1932:
case 3516:
case 1126:
case 1571:
case 468:
case 3632:
case 520:
case 87:
case 1572:
case 3860:
case 847:
case 1282:
case 299:
case 931:
case 2653:
case 1466:
case 509:
case 1221:
case 2154:
case 1222:
case 1505:
case 735:
case 462:
case 144:
case 3820:
case 1104:
case 89:
case 3041:
case 2454:
case 2835:
case 2439:
case 279:
case 114:
case 1731:
case 353:
case 4095:
case 1893:
case 415:
case 1470:
case 1166:
case 1486:
case 2183:
case 2624:
case 397:
case 2715:
case 466:
case 864:
case 2188:
case 1656:
case 2468:
case 1898:
case 1262:
case 530:
case 48:
case 2487:
case 2345:
case 2167:
case 3309:
case 2123:
case 986:
case 1812:
case 401:
case 1261:
case 2209:
case 277:
case 3187:
case 24:
case 631:
case 2860:
case 1724:
case 3606:
case 55:
case 4075:
case 3896:
case 1615:
case 513:
case 3483:
case 1517:
case 4001:
case 2756:
case 819:
case 682:
case 1878:
case 3658:
case 2099:
case 3428:
case 180:
case 1784:
case 1549:
case 3139:
case 3154:
case 1591:
case 285:
case 2908:
case 1877:
case 379:
case 3128:
case 3439:
case 3454:
case 1924:
case 3657:
case 2820:
case 3427:
case 3183:
case 1592:
case 543:
case 1753:
case 2876:
case 1025:
case 3188:
case 2740:
case 621:
case 507:
case 1259:
case 3123:
case 2310:
case 2309:
case 3345:
case 2391:
case 2249:
case 670:
case 1497:
case 3205:
case 2318:
case 895:
case 1694:
case 1112:
case 2774:
case 2823:
case 38:
case 948:
case 3521:
case 3460:
case 3180:
case 2748:
case 172:
case 887:
case 196:
case 1750:
case 2888:
case 3646:
case 301:
case 2217:
case 2947:
case 2883:
case 1052:
case 1866:
case 3272:
case 4042:
case 2828:
case 965:
case 3271:
case 2313:
case 1216:
case 3581:
case 1510:
case 1804:
case 3371:
case 1316:
case 345:
case 3420:
case 176:
case 2559:
case 2839:
case 2001:
case 2534:
case 2196:
case 875:
case 912:
case 3372:
case 3036:
case 1493:
case 2317:
case 3476:
case 3480:
case 2868:
case 477:
case 1826:
case 2291:
case 123:
case 73:
case 2943:
case 460:
case 2408:
case 1158:
case 528:
case 2352:
case 2686:
case 3115:
case 1790:
case 1424:
case 1663:
case 1202:
case 3939:
case 3788:
case 1457:
case 980:
case 1013:
case 899:
case 3927:
case 644:
case 2107:
case 3369:
case 3767:
case 3289:
case 3874:
case 1275:
case 3728:
case 1484:
case 2541:
case 1585:
case 2626:
case 1091:
case 203:
case 1106:
case 3783:
case 1668:
case 3338:
case 3987:
case 489:
case 3843:
case 2403:
case 1688:
case 2156:
case 1406:
case 3690:
case 573:
case 3923:
case 4059:
case 2103:
case 4034:
case 1453:
case 3238:
case 1565:
case 1623:
case 349:
case 3337:
case 3739:
case 3754:
case 2599:
case 3389:
case 217:
case 2604:
case 1157:
case 526:
case 3233:
case 2108:
case 3819:
case 538:
case 3693:
case 3760:
case 4016:
case 464:
case 142:
case 417:
case 1450:
case 2100:
case 2119:
case 1620:
case 165:
case 801:
case 1993:
case 2474:
case 2575:
case 1399:
case 2677:
case 2285:
case 1911:
case 49:
case 3980:
case 3976:
case 2034:
case 1998:
case 148:
case 3194:
case 752:
case 2796:
case 815:
case 2502:
case 2443:
case 3698:
case 3082:
case 998:
case 2143:
case 1660:
case 1793:
case 3081:
case 1010:
case 1831:
case 1551:
case 375:
case 3595:
case 3697:
case 2644:
case 2996:
case 737:
case 610:
case 1341:
case 2265:
case 3022:
case 2174:
case 351:
case 1342:
case 47:
case 3780:
case 3840:
case 2815:
case 447:
case 2619:
case 2033:
case 995:
case 467:
case 414:
case 816:
case 848:
case 1272:
case 1582:
case 3866:
case 384:
case 1095:
case 2177:
case 1271:
case 2069:
case 2647:
case 3946:
case 3112:
case 3694:
case 1522:
case 166:
case 842:
case 791:
case 333:
case 2355:
case 4030:
case 3198:
case 372:
case 1460:
case 1180:
case 3111:
case 865:
case 101:
case 2473:
case 2890:
case 3750:
case 396:
case 2038:
case 1476:
case 3411:
case 2643:
case 2029:
case 168:
case 975:
case 3197:
case 812:
case 3826:
case 2255:
case 783:
case 1305:
case 2674:
case 210:
case 2477:
case 3950:
case 376:
case 2089:
case 2144:
case 1794:
case 1420:
case 1561:
case 1650:
case 1372:
case 951:
case 3746:
case 1562:
case 162:
case 846:
case 1163:
case 1483:
case 3615:
case 2186:
case 2466:
case 410:
case 1428:
case 3065:
case 2607:
case 2222:
case 2932:
case 2126:
case 919:
case 1423:
case 709:
case 1664:
case 3334:
case 2361:
case 2572:
case 1653:
case 4037:
case 2931:
case 2362:
case 3724:
case 3873:
case 2262:
case 3025:
case 2898:
case 3984:
case 2030:
case 3758:
case 69:
case 3190:
case 1468:
case 1188:
case 2382:
case 2656:
case 3259:
case 3234:
case 1079:
case 2261:
case 1345:
case 2381:
case 1167:
case 1487:
case 214:
case 179:
case 1128:
case 617:
case 2322:
case 730:
case 3924:
case 1657:
case 267:
case 1439:
case 3085:
case 1454:
case 1835:
case 3592:
case 2321:
case 1427:
case 4069:
case 2732:
case 2608:
case 3753:
case 440:
case 2893:
case 3911:
case 2589:
case 966:
case 2884:
case 1612:
case 316:
case 98:
case 3912:
case 1536:
case 1856:
case 1062:
case 486:
case 2778:
case 1698:
case 901:
case 878:
case 1611:
case 46:
case 2977:
case 4071:
case 833:
case 1808:
case 1693:
case 539:
case 2529:
case 2773:
case 3242:
case 3620:
case 2857:
case 3797:
case 187:
case 3399:
case 705:
case 896:
case 3241:
case 3993:
case 945:
case 3712:
case 482:
case 1780:
case 3711:
case 290:
case 312:
case 1021:
case 823:
case 3150:
case 962:
case 1840:
case 2696:
case 3997:
case 892:
case 2214:
case 3552:
case 488:
case 3446:
case 500:
case 3660:
case 474:
case 2853:
case 1960:
case 3010:
case 3831:
case 3551:
case 2777:
case 2379:
case 1697:
case 318:
case 431:
case 2973:
case 1720:
case 1494:
case 3164:
case 3484:
case 274:
case 3687:
case 119:
case 677:
case 3091:
case 1968:
case 3018:
case 64:
case 1229:
case 3668:
case 2132:
case 999:
case 1783:
case 1843:
case 4045:
case 3153:
case 3092:
case 3158:
case 1954:
case 3202:
case 1939:
case 1788:
case 563:
case 2236:
case 3663:
case 3013:
case 1369:
case 3639:
case 3457:
case 1963:
case 2970:
case 1579:
case 1723:
case 2986:
case 1289:
case 1767:
case 3201:
case 2395:
case 1983:
case 979:
case 1389:
case 1847:
case 759:
case 2295:
case 1787:
case 2966:
case 2336:
case 1233:
case 3683:
case 1800:
case 3124:
case 1819:
case 2072:
case 1690:
case 1763:
case 3688:
case 2432:
case 1727:
case 1238:
case 470:
case 1967:
case 3453:
case 221:
case 2786:
case 149:
case 3184:
case 3990:
case 1739:
case 1988:
case 1754:
case 3375:
case 1626:
case 2091:
case 2275:
case 3131:
case 2687:
case 728:
case 2092:
case 4009:
case 4010:
case 3766:
case 3926:
case 418:
case 3132:
case 699:
case 1456:
case 446:
case 722:
case 2424:
case 2525:
case 3236:
case 1140:
case 3850:
case 3530:
case 2627:
case 2201:
case 17:
case 3986:
case 1351:
case 2639:
case 1107:
case 147:
case 1016:
case 3071:
case 2628:
case 679:
case 985:
case 2301:
case 773:
case 2157:
case 3072:
case 2683:
case 1440:
case 997:
case 465:
case 1666:
case 3770:
case 19:
case 2017:
case 321:
case 2453:
case 448:
case 781:
case 814:
case 2688:
case 1156:
case 3846:
case 2406:
case 2375:
case 1894:
case 738:
case 2990:
case 2184:
case 2623:
case 36:
case 726:
case 3005:
case 248:
case 216:
case 68:
case 3884:
case 1034:
case 1501:
case 2998:
case 3279:
case 601:
case 558:
case 4049:
case 3314:
case 1225:
case 3778:
case 1502:
case 2912:
case 2450:
case 1935:
case 2242:
case 3824:
case 1119:
case 1100:
case 3977:
case 1474:
case 1575:
case 265:
case 2993:
case 1285:
case 2399:
case 3537:
case 1644:
case 2712:
case 2299:
case 1447:
case 3944:
case 1419:
case 1400:
case 1815:
case 2150:
case 662:
case 2798:
case 212:
case 1148:
case 390:
case 2342:
case 3858:
case 2711:
case 2660:
case 2793:
case 1143:
case 4018:
case 3806:
case 2832:
case 4091:
case 2997:
case 3214:
case 1735:
case 218:
case 246:
case 3777:
case 2010:
case 2009:
case 3864:
case 3221:
case 3466:
case 1703:
case 3640:
case 1907:
case 75:
case 3505:
case 1940:
case 2549:
case 3607:
case 1099:
case 947:
case 2958:
case 831:
case 269:
case 14:
case 903:
case 2906:
case 2757:
case 3126:
case 619:
case 177:
case 1210:
case 2724:
case 3362:
case 2964:
case 3572:
case 1860:
case 433:
case 5:
case 2190:
case 1740:
case 3030:
case 1876:
case 2984:
case 3262:
case 11:
case 2513:
case 472:
case 1309:
case 1310:
case 496:
case 649:
case 1707:
case 3261:
case 1956:
case 743:
case 3812:
case 1041:
case 707:
case 821:
case 917:
case 4052:
case 185:
case 3322:
case 2518:
case 314:
case 3470:
case 3893:
case 3486:
case 484:
case 886:
case 3608:
case 478:
case 3732:
case 3321:
case 4051:
case 2193:
case 1743:
case 870:
case 1947:
case 4085:
case 1883:
case 3033:
case 695:
case 506:
case 3600:
case 3619:
case 3647:
case 3069:
case 1135:
case 2804:
case 3444:
case 1919:
case 2510:
case 2509:
case 340:
case 687:
case 1828:
case 284:
case 1823:
case 4025:
case 1867:
case 233:
case 2497:
case 1391:
case 1318:
case 2694:
case 2750:
case 296:
case 1888:
case 1217:
case 272:
case 1392:
case 3173:
case 1700:
case 1868:
case 2498:
case 3643:
case 2411:
case 1349:
case 3037:
case 1291:
case 2412:
case 1075:
case 890:
case 960:
case 3144:
case 1948:
case 310:
case 3477:
case 292:
case 3674:
case 1002:
case 53:
case 480:
case 2886:
case 2746:
case 1863:
case 1827:
case 3178:
case 651:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754114402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,];
var gg_b = "1754114402/";

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
