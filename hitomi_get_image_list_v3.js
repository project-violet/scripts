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
case 3567:
case 2614:
case 3332:
case 2125:
case 643:
case 313:
case 3592:
case 106:
case 3521:
case 3009:
case 254:
case 840:
case 2293:
case 3594:
case 3693:
case 1582:
case 2080:
case 3310:
case 2117:
case 3163:
case 794:
case 765:
case 3334:
case 1677:
case 1749:
case 3846:
case 1936:
case 2166:
case 135:
case 3296:
case 304:
case 2377:
case 1234:
case 2874:
case 548:
case 267:
case 3994:
case 265:
case 2468:
case 327:
case 3150:
case 3170:
case 1396:
case 1210:
case 3805:
case 2067:
case 170:
case 781:
case 1866:
case 3769:
case 1143:
case 1314:
case 2852:
case 3916:
case 1449:
case 4055:
case 2735:
case 920:
case 3992:
case 3386:
case 1244:
case 169:
case 303:
case 2376:
case 2356:
case 753:
case 1894:
case 1397:
case 1129:
case 3403:
case 1074:
case 3109:
case 1260:
case 2731:
case 3373:
case 1537:
case 4071:
case 1362:
case 3353:
case 1905:
case 4051:
case 3925:
case 1340:
case 1364:
case 462:
case 228:
case 1808:
case 3917:
case 1242:
case 368:
case 3828:
case 3719:
case 3801:
case 1439:
case 3387:
case 1892:
case 2745:
case 1052:
case 2017:
case 2550:
case 3703:
case 1287:
case 644:
case 314:
case 2829:
case 286:
case 3240:
case 728:
case 2431:
case 2640:
case 2970:
case 562:
case 2563:
case 3264:
case 3890:
case 3050:
case 1043:
case 1253:
case 2108:
case 2833:
case 1273:
case 2662:
case 2121:
case 1880:
case 2116:
case 793:
case 2167:
case 3847:
case 1946:
case 3419:
case 1656:
case 1739:
case 3525:
case 2697:
case 3360:
case 3549:
case 559:
case 995:
case 3048:
case 964:
case 1251:
case 2678:
case 2948:
case 2429:
case 1106:
case 3111:
case 533:
case 3126:
case 629:
case 499:
case 1685:
case 4060:
case 521:
case 3165:
case 3784:
case 3819:
case 3701:
case 776:
case 3695:
case 3447:
case 1480:
case 2139:
case 390:
case 892:
case 3790:
case 2818:
case 1823:
case 1131:
case 691:
case 32:
case 1494:
case 3138:
case 3482:
case 700:
case 3061:
case 1569:
case 433:
case 2049:
case 3484:
case 3428:
case 2259:
case 2279:
case 746:
case 1839:
case 3401:
case 599:
case 3736:
case 955:
case 2385:
case 3747:
case 1780:
case 2733:
case 1378:
case 1358:
case 2381:
case 3011:
case 1425:
case 2911:
case 696:
case 2926:
case 2304:
case 3289:
case 3148:
case 1903:
case 2868:
case 3375:
case 2023:
case 588:
case 2454:
case 2474:
case 434:
case 3746:
case 2200:
case 3600:
case 2472:
case 210:
case 1417:
case 1466:
case 2743:
case 3065:
case 2291:
case 4010:
case 3705:
case 1602:
case 1168:
case 534:
case 4034:
case 2774:
case 1389:
case 1275:
case 2526:
case 1255:
case 2772:
case 2752:
case 1681:
case 382:
case 2149:
case 771:
case 1766:
case 3869:
case 2288:
case 2443:
case 526:
case 3523:
case 2224:
case 880:
case 1503:
case 2500:
case 1464:
case 1440:
case 2922:
case 21:
case 3638:
case 1858:
case 2238:
case 3760:
case 4082:
case 456:
case 1323:
case 4028:
case 1645:
case 1975:
case 1497:
case 1955:
case 1219:
case 3453:
case 1004:
case 3589:
case 3088:
case 2318:
case 968:
case 1740:
case 496:
case 626:
case 4090:
case 3626:
case 3319:
case 3444:
case 2588:
case 249:
case 3000:
case 634:
case 4047:
case 1020:
case 4036:
case 2756:
case 3239:
case 2776:
case 1762:
case 3753:
case 3195:
case 3773:
case 779:
case 3369:
case 332:
case 2595:
case 130:
case 3627:
case 3410:
case 1730:
case 1607:
case 2783:
case 621:
case 491:
case 3786:
case 3661:
case 3122:
case 39:
case 1668:
case 2335:
case 3191:
case 438:
case 1198:
case 845:
case 3434:
case 847:
case 3059:
case 1796:
case 1571:
case 4037:
case 3079:
case 584:
case 1551:
case 3615:
case 3558:
case 3578:
case 2777:
case 3432:
case 3188:
case 2820:
case 2757:
case 2559:
case 2579:
case 2898:
case 3710:
case 1641:
case 1971:
case 1430:
case 4005:
case 3958:
case 904:
case 3978:
case 1085:
case 1349:
case 1496:
case 591:
case 3855:
case 1635:
case 3095:
case 2457:
case 1120:
case 320:
case 35:
case 70:
case 861:
case 2372:
case 161:
case 444:
case 2883:
case 2064:
case 2402:
case 217:
case 502:
case 2250:
case 3650:
case 258:
case 1542:
case 2040:
case 1560:
case 3962:
case 1953:
case 1643:
case 1325:
case 2877:
case 2374:
case 2720:
case 2097:
case 1246:
case 1896:
case 1056:
case 574:
case 1076:
case 1944:
case 885:
case 1553:
case 3562:
case 809:
case 1654:
case 3337:
case 1573:
case 363:
case 109:
case 474:
case 2798:
case 2343:
case 2625:
case 3225:
case 2704:
case 4069:
case 1177:
case 2112:
case 2666:
case 3266:
case 2617:
case 3663:
case 298:
case 3832:
case 3564:
case 715:
case 717:
case 3193:
case 231:
case 3755:
case 3499:
case 982:
case 3347:
case 3844:
case 512:
case 1934:
case 2785:
case 2164:
case 84:
case 3294:
case 1282:
case 2140:
case 473:
case 14:
case 3771:
case 3596:
case 1910:
case 3512:
case 2197:
case 2213:
case 3267:
case 2667:
case 1932:
case 3208:
case 2608:
case 3221:
case 3842:
case 3216:
case 1228:
case 2616:
case 4019:
case 3292:
case 3914:
case 2485:
case 1308:
case 4003:
case 1316:
case 87:
case 1392:
case 3384:
case 1986:
case 443:
case 819:
case 1629:
case 2209:
case 1840:
case 3930:
case 866:
case 1532:
case 1864:
case 1367:
case 1290:
case 355:
case 2993:
case 357:
case 3853:
case 3093:
case 318:
case 1534:
case 3873:
case 3280:
case 724:
case 2680:
case 412:
case 1247:
case 2096:
case 648:
case 2876:
case 1236:
case 1077:
case 1057:
case 3996:
case 2999:
case 527:
case 3859:
case 1900:
case 1756:
case 1639:
case 504:
case 3920:
case 618:
case 442:
case 655:
case 1265:
case 4009:
case 2185:
case 2764:
case 2740:
case 3218:
case 1226:
case 938:
case 2618:
case 2555:
case 1524:
case 28:
case 1623:
case 3151:
case 849:
case 1345:
case 3504:
case 2203:
case 1178:
case 3603:
case 1089:
case 1588:
case 2323:
case 2645:
case 2975:
case 2497:
case 2955:
case 1456:
case 3619:
case 3895:
case 3981:
case 2462:
case 1988:
case 78:
case 4013:
case 2081:
case 1318:
case 3326:
case 81:
case 3998:
case 2464:
case 3231:
case 2098:
case 2858:
case 3365:
case 1238:
case 425:
case 697:
case 427:
case 664:
case 2339:
case 404:
case 1885:
case 608:
case 2496:
case 4063:
case 2635:
case 1457:
case 2412:
case 222:
case 1881:
case 2120:
case 3199:
case 3327:
case 3493:
case 1804:
case 860:
case 3891:
case 1078:
case 3241:
case 2430:
case 2951:
case 1802:
case 663:
case 3315:
case 275:
case 2104:
case 503:
case 3800:
case 2181:
case 1979:
case 775:
case 777:
case 3585:
case 4050:
case 1595:
case 230:
case 2607:
case 3207:
case 2889:
case 1261:
case 80:
case 245:
case 2668:
case 3268:
case 247:
case 2714:
case 2198:
case 996:
case 1704:
case 2587:
case 1196:
case 3788:
case 2157:
case 1112:
case 620:
case 1781:
case 1420:
case 3272:
case 198:
case 2672:
case 2942:
case 3252:
case 3400:
case 550:
case 898:
case 131:
case 3042:
case 2553:
case 399:
case 2654:
case 3274:
case 285:
case 3044:
case 123:
case 287:
case 1130:
case 2960:
case 3186:
case 3722:
case 3605:
case 1343:
case 2205:
case 1625:
case 3576:
case 3791:
case 3053:
case 1404:
case 3893:
case 3073:
case 912:
case 2560:
case 3132:
case 3243:
case 3488:
case 2953:
case 2973:
case 2643:
case 709:
case 1481:
case 787:
case 2237:
case 1877:
case 1374:
case 1097:
case 3956:
case 3700:
case 2246:
case 3646:
case 4:
case 333:
case 2896:
case 2056:
case 2076:
case 4061:
case 2814:
case 3363:
case 3087:
case 321:
case 3110:
case 1883:
case 1064:
case 117:
case 3422:
case 1270:
case 158:
case 3134:
case 2542:
case 2366:
case 3491:
case 1993:
case 2862:
case 2633:
case 2534:
case 3142:
case 3233:
case 1680:
case 3647:
case 2247:
case 3957:
case 3779:
case 2077:
case 1012:
case 2057:
case 334:
case 2321:
case 1485:
case 3086:
case 2458:
case 266:
case 326:
case 2629:
case 1209:
case 3160:
case 944:
case 3144:
case 2083:
case 4011:
case 2367:
case 582:
case 2290:
case 136:
case 1197:
case 2586:
case 1213:
case 836:
case 1667:
case 77:
case 2176:
case 2932:
case 1162:
case 3601:
case 902:
case 2228:
case 3459:
case 2201:
case 3479:
case 1616:
case 2284:
case 3032:
case 824:
case 105:
case 2934:
case 107:
case 1785:
case 1593:
case 889:
case 124:
case 2282:
case 807:
case 1140:
case 24:
case 3187:
case 974:
case 3577:
case 2380:
case 4038:
case 1067:
case 1383:
case 1913:
case 3137:
case 3146:
case 3084:
case 2314:
case 3632:
case 1852:
case 2449:
case 2901:
case 1735:
case 3529:
case 356:
case 1016:
case 3634:
case 2312:
case 1357:
case 1854:
case 894:
case 1377:
case 3082:
case 3533:
case 865:
case 1874:
case 194:
case 167:
case 1468:
case 2396:
case 211:
case 4091:
case 3393:
case 2210:
case 1741:
case 4022:
case 735:
case 2825:
case 154:
case 2033:
case 1080:
case 2172:
case 1843:
case 1117:
case 2152:
case 3277:
case 2657:
case 1612:
case 3257:
case 2677:
case 2749:
case 711:
case 2936:
case 4000:
case 237:
case 235:
case 881:
case 1768:
case 770:
case 2286:
case 3686:
case 3448:
case 3929:
case 3283:
case 3727:
case 2029:
case 206:
case 2990:
case 2501:
case 2043:
case 3765:
case 948:
case 3184:
case 3943:
case 3574:
case 1116:
case 716:
case 3101:
case 2505:
case 2676:
case 2946:
case 3256:
case 6:
case 1697:
case 4059:
case 839:
case 650:
case 391:
case 62:
case 2287:
case 55:
case 1194:
case 3726:
case 186:
case 3182:
case 3711:
case 3572:
case 432:
case 1563:
case 978:
case 3465:
case 351:
case 701:
case 2340:
case 3813:
case 2867:
case 3147:
case 3972:
case 128:
case 1963:
case 2133:
case 1180:
case 1017:
case 4095:
case 329:
case 3974:
case 893:
case 269:
case 2397:
case 2054:
case 2074:
case 216:
case 2260:
case 3426:
case 3005:
case 1025:
case 2537:
case 2362:
case 2905:
case 3541:
case 1915:
case 2492:
case 2839:
case 2780:
case 3119:
case 3413:
case 2467:
case 1733:
case 3865:
case 2358:
case 73:
case 2007:
case 3709:
case 1806:
case 1818:
case 3535:
case 176:
case 2823:
case 16:
case 344:
case 792:
case 2494:
case 3968:
case 252:
case 926:
case 2068:
case 23:
case 1527:
case 3507:
case 668:
case 2721:
case 1295:
case 2480:
case 1139:
case 302:
case 3069:
case 988:
case 100:
case 752:
case 3568:
case 2041:
case 2271:
case 3651:
case 2251:
case 3941:
case 1948:
case 3103:
case 3838:
case 146:
case 463:
case 2794:
case 2118:
case 374:
case 3379:
case 3359:
case 3285:
case 3019:
case 1511:
case 2389:
case 2275:
case 1835:
case 3518:
case 2255:
case 1149:
case 2766:
case 3281:
case 1288:
case 280:
case 1443:
case 2503:
case 3204:
case 2604:
case 2031:
case 2725:
case 518:
case 3298:
case 1222:
case 2602:
case 3848:
case 2168:
case 3202:
case 495:
case 464:
case 627:
case 141:
case 373:
case 841:
case 1320:
case 1774:
case 597:
case 3531:
case 959:
case 810:
case 1538:
case 3815:
case 312:
case 2849:
case 1200:
case 3169:
case 1472:
case 3220:
case 2417:
case 1452:
case 4093:
case 2466:
case 1743:
case 457:
case 1965:
case 2135:
case 2519:
case 2006:
case 2425:
case 2018:
case 921:
case 3827:
case 3324:
case 3918:
case 1807:
case 3545:
case 1689:
case 1868:
case 343:
case 3003:
case 1474:
case 1442:
case 2099:
case 2879:
case 3020:
case 3797:
case 2502:
case 565:
case 594:
case 1665:
case 1773:
case 3575:
case 3555:
case 3618:
case 1611:
case 3764:
case 3185:
case 1319:
case 2504:
case 3203:
case 2171:
case 1989:
case 1223:
case 2151:
case 1460:
case 278:
case 2895:
case 4092:
case 4016:
case 3645:
case 3955:
case 1088:
case 1589:
case 1473:
case 2981:
case 1638:
case 3098:
case 969:
case 3878:
case 2231:
case 1871:
case 3440:
case 1851:
case 554:
case 2520:
case 3002:
case 916:
case 605:
case 689:
case 3339:
case 1487:
case 624:
case 494:
case 1760:
case 1732:
case 970:
case 2361:
case 4017:
case 2493:
case 586:
case 15:
case 3120:
case 2888:
case 322:
case 85:
case 262:
case 4025:
case 3641:
case 3430:
case 3414:
case 1734:
case 539:
case 3349:
case 377:
case 3085:
case 493:
case 623:
case 1249:
case 1558:
case 1615:
case 940:
case 1578:
case 3571:
case 1059:
case 1124:
case 3551:
case 1079:
case 2175:
case 935:
case 2585:
case 3607:
case 1410:
case 615:
case 658:
case 528:
case 347:
case 3102:
case 3889:
case 1786:
case 1661:
case 721:
case 3177:
case 2788:
case 400:
case 576:
case 2350:
case 1499:
case 2042:
case 56:
case 808:
case 3652:
case 1564:
case 1217:
case 3672:
case 3489:
case 2044:
case 3183:
case 1562:
case 299:
case 3674:
case 3573:
case 3654:
case 2556:
case 2791:
case 1225:
case 2605:
case 3205:
case 1810:
case 2722:
case 1597:
case 3325:
case 259:
case 3953:
case 2488:
case 3643:
case 3973:
case 2424:
case 2053:
case 1799:
case 1475:
case 2976:
case 3237:
case 3812:
case 221:
case 2363:
case 3814:
case 60:
case 3366:
case 2491:
case 3542:
case 2134:
case 1940:
case 1670:
case 500:
case 476:
case 2422:
case 3633:
case 1853:
case 3862:
case 1873:
case 2142:
case 3534:
case 2233:
case 818:
case 155:
case 1996:
case 3077:
case 4039:
case 234:
case 3057:
case 3394:
case 410:
case 2636:
case 2957:
case 3247:
case 2495:
case 471:
case 37:
case 1887:
case 2086:
case 1328:
case 4023:
case 3308:
case 2690:
case 319:
case 3367:
case 3840:
case 1451:
case 1609:
case 2160:
case 1930:
case 3458:
case 93:
case 3156:
case 1390:
case 1267:
case 3284:
case 2459:
case 726:
case 3932:
case 2173:
case 1221:
case 34:
case 1294:
case 2034:
case 197:
case 679:
case 510:
case 1844:
case 864:
case 2557:
case 1751:
case 3758:
case 61:
case 172:
case 1769:
case 2137:
case 1967:
case 872:
case 1013:
case 2028:
case 1386:
case 2529:
case 3984:
case 256:
case 1992:
case 2415:
case 3449:
case 3928:
case 3901:
case 549:
case 1908:
case 2863:
case 3817:
case 2632:
case 3314:
case 1150:
case 2461:
case 1170:
case 125:
case 804:
case 127:
case 283:
case 1580:
case 104:
case 3312:
case 2533:
case 975:
case 3547:
case 977:
case 1805:
case 3210:
case 2610:
case 2427:
case 41:
case 783:
case 842:
case 51:
case 1296:
case 337:
case 2715:
case 2047:
case 1846:
case 610:
case 3749:
case 3936:
case 1334:
case 3657:
case 2277:
case 3677:
case 1212:
case 2257:
case 2761:
case 3286:
case 449:
case 1567:
case 4089:
case 1516:
case 1009:
case 3528:
case 756:
case 3154:
case 3029:
case 1508:
case 813:
case 3174:
case 2090:
case 2870:
case 2283:
case 296:
case 1592:
case 3683:
case 2128:
case 3880:
case 784:
case 2943:
case 1262:
case 2554:
case 2653:
case 3273:
case 2574:
case 1360:
case 1297:
case 2256:
case 1525:
case 1836:
case 2276:
case 3656:
case 3505:
case 1344:
case 1847:
case 66:
case 291:
case 2687:
case 3287:
case 751:
case 301:
case 560:
case 1264:
case 2809:
case 2711:
case 676:
case 2182:
case 791:
case 1966:
case 2136:
case 3867:
case 2147:
case 600:
case 738:
case 3340:
case 251:
case 3072:
case 1387:
case 868:
case 1719:
case 3816:
case 3439:
case 1801:
case 3808:
case 2642:
case 3133:
case 3242:
case 3423:
case 2660:
case 1403:
case 3397:
case 1882:
case 3244:
case 2954:
case 229:
case 369:
case 2644:
case 1925:
case 4078:
case 3362:
case 1353:
case 2738:
case 3408:
case 1:
case 3416:
case 1736:
case 3839:
case 639:
case 3378:
case 2865:
case 3145:
case 4062:
case 1351:
case 1371:
case 2413:
case 774:
case 3780:
case 2907:
case 4064:
case 3007:
case 458:
case 1027:
case 97:
case 2395:
case 966:
case 150:
case 1061:
case 3569:
case 3494:
case 244:
case 2968:
case 1138:
case 531:
case 1695:
case 1447:
case 3721:
case 1819:
case 498:
case 1436:
case 1784:
case 3792:
case 33:
case 890:
case 2568:
case 202:
case 3767:
case 2713:
case 190:
case 3480:
case 392:
case 558:
case 3969:
case 2838:
case 2941:
case 2671:
case 3251:
case 1048:
case 1490:
case 2285:
case 2379:
case 3118:
case 1126:
case 3794:
case 1782:
case 3106:
case 693:
case 1437:
case 3717:
case 1446:
case 2655:
case 2945:
case 2675:
case 3255:
case 3389:
case 2204:
case 3503:
case 1115:
case 3604:
case 380:
case 1688:
case 3681:
case 743:
case 1869:
case 3766:
case 2202:
case 2931:
case 985:
case 987:
case 1038:
case 1705:
case 405:
case 2300:
case 3107:
case 424:
case 694:
case 1399:
case 665:
case 1737:
case 3620:
case 3417:
case 1746:
case 3849:
case 505:
case 1939:
case 2531:
case 2699:
case 3135:
case 1065:
case 2391:
case 3466:
case 2918:
case 536:
case 1026:
case 3018:
case 961:
case 4030:
case 3006:
case 1011:
case 1148:
case 1375:
case 4014:
case 2861:
case 681:
case 381:
case 3768:
case 3125:
case 2214:
case 2516:
case 2508:
case 3909:
case 1850:
case 3630:
case 90:
case 1283:
case 2980:
case 242:
case 2469:
case 727:
case 704:
case 2310:
case 354:
case 3696:
case 1047:
case 3166:
case 2837:
case 2212:
case 2150:
case 225:
case 227:
case 3468:
case 365:
case 2580:
case 4002:
case 2805:
case 1610:
case 1427:
case 3741:
case 1748:
case 1393:
case 680:
case 4004:
case 2769:
case 1137:
case 3383:
case 4081:
case 2386:
case 3008:
case 156:
case 3021:
case 713:
case 3872:
case 1863:
case 1632:
case 184:
case 393:
case 2882:
case 3376:
case 1954:
case 884:
case 1644:
case 1974:
case 3731:
case 3025:
case 3418:
case 1426:
case 530:
case 1136:
case 1813:
case 692:
case 3066:
case 151:
case 3550:
case 547:
case 545:
case 2387:
case 3745:
case 2828:
case 714:
case 328:
case 268:
case 2917:
case 1952:
case 447:
case 838:
case 652:
case 138:
case 2890:
case 2070:
case 430:
case 1552:
case 2517:
case 3431:
case 2240:
case 1809:
case 1711:
case 768:
case 3640:
case 3194:
case 3829:
case 3718:
case 1182:
case 386:
case 3116:
case 1101:
case 1943:
case 1554:
case 3121:
case 3662:
case 1653:
case 3833:
case 703:
case 1184:
case 1765:
case 3192:
case 577:
case 1037:
case 2297:
case 1256:
case 2419:
case 2836:
case 1276:
case 3167:
case 2113:
case 2847:
case 339:
case 3429:
case 905:
case 989:
case 1838:
case 346:
case 3123:
case 1941:
case 1671:
case 924:
case 669:
case 1359:
case 409:
case 485:
case 487:
case 2695:
case 2447:
case 2728:
case 2819:
case 2436:
case 2701:
case 1507:
case 3845:
case 3527:
case 1568:
case 750:
case 1069:
case 1713:
case 290:
case 3433:
case 3139:
case 1826:
case 3729:
case 1709:
case 3927:
case 2790:
case 1395:
case 844:
case 250:
case 2061:
case 601:
case 144:
case 1968:
case 2482:
case 3961:
case 461:
case 22:
case 2949:
case 2679:
case 3259:
case 2736:
case 2401:
case 4056:
case 3548:
case 587:
case 2351:
case 3733:
case 3304:
case 3807:
case 1750:
case 1770:
case 1827:
case 3911:
case 1388:
case 419:
case 2011:
case 915:
case 3454:
case 917:
case 958:
case 371:
case 2148:
case 47:
case 143:
case 3868:
case 1861:
case 2289:
case 3689:
case 2737:
case 2746:
case 112:
case 1169:
case 1815:
case 3538:
case 812:
case 1531:
case 635:
case 1699:
case 3965:
case 3743:
case 1391:
case 1202:
case 611:
case 2161:
case 3222:
case 3841:
case 923:
case 2705:
case 2691:
case 3320:
case 873:
case 1300:
case 341:
case 3565:
case 173:
case 44:
case 3772:
case 1763:
case 1518:
case 1506:
case 3511:
case 1204:
case 998:
case 2115:
case 2624:
case 3288:
case 3149:
case 519:
case 1365:
case 3238:
case 2091:
case 31:
case 1998:
case 993:
case 2022:
case 540:
case 379:
case 3885:
case 64:
case 535:
case 178:
case 2742:
case 3456:
case 2303:
case 2088:
case 1326:
case 3318:
case 1311:
case 3988:
case 2473:
case 2024:
case 2159:
case 470:
case 2179:
case 3226:
case 2626:
case 666:
case 4029:
case 619:
case 406:
case 570:
case 3588:
case 2444:
case 3089:
case 2319:
case 3158:
case 1603:
case 67:
case 2989:
case 2223:
case 1151:
case 3623:
case 148:
case 1598:
case 2442:
case 3639:
case 3776:
case 1879:
case 3591:
case 848:
case 3522:
case 435:
case 1338:
case 939:
case 4033:
case 3331:
case 2410:
case 2627:
case 3595:
case 75:
case 2434:
case 401:
case 1268:
case 3335:
case 3261:
case 720:
case 29:
case 3820:
case 2188:
case 3777:
case 2432:
case 954:
case 1800:
case 569:
case 3649:
case 2615:
case 516:
case 2899:
case 2124:
case 1793:
case 1175:
case 1155:
case 1348:
case 4043:
case 3341:
case 3248:
case 2958:
case 3802:
case 2648:
case 2710:
case 3058:
case 3898:
case 3078:
case 3559:
case 3579:
case 1051:
case 2734:
case 469:
case 1315:
case 685:
case 4054:
case 609:
case 687:
case 4074:
case 2732:
case 3477:
case 3457:
case 1235:
case 3368:
case 2095:
case 2855:
case 732:
case 1361:
case 4052:
case 3804:
case 3307:
case 1824:
case 25:
case 79:
case 360:
case 2100:
case 1669:
case 1110:
case 645:
case 647:
case 4068:
case 1363:
case 3372:
case 3040:
case 4007:
case 630:
case 358:
case 3498:
case 971:
case 2964:
case 1134:
case 2940:
case 3270:
case 2650:
case 3883:
case 315:
case 3064:
case 3481:
case 1488:
case 1243:
case 1132:
case 1893:
case 3062:
case 910:
case 1073:
case 2455:
case 2997:
case 1700:
case 1956:
case 3720:
case 833:
case 1637:
case 3130:
case 899:
case 2346:
case 1254:
case 199:
case 1274:
case 2834:
case 1556:
case 1791:
case 1576:
case 941:
case 3114:
case 3798:
case 4041:
case 3343:
case 2810:
case 1722:
case 3702:
case 3666:
case 3781:
case 2266:
case 622:
case 492:
case 1724:
case 1350:
case 2540:
case 2193:
case 208:
case 1042:
case 1400:
case 1272:
case 398:
case 2663:
case 3420:
case 3617:
case 1252:
case 2217:
case 552:
case 3140:
case 718:
case 295:
case 3593:
case 2294:
case 3694:
case 1034:
case 264:
case 297:
case 755:
case 2336:
case 2844:
case 305:
case 2347:
case 946:
case 1557:
case 2771:
case 2751:
case 1187:
case 2267:
case 3667:
case 2613:
case 3197:
case 3329:
case 888:
case 1583:
case 2292:
case 2216:
case 4045:
case 1628:
case 3621:
case 900:
case 1153:
case 3162:
case 2208:
case 1173:
case 1795:
case 2842:
case 2221:
case 3608:
case 2887:
case 68:
case 2384:
case 2328:
case 2914:
case 3485:
case 1690:
case 580:
case 3030:
case 1313:
case 826:
case 2471:
case 1160:
case 2930:
case 1229:
case 1983:
case 2280:
case 797:
case 3680:
case 2093:
case 2853:
case 2873:
case 134:
case 3012:
case 3856:
case 1759:
case 3096:
case 1636:
case 3876:
case 1779:
case 1977:
case 1957:
case 2912:
case 834:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753916401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,];
var gg_b = "1753916401/";

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
