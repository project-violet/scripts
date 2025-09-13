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
case 3633:
case 2337:
case 1981:
case 113:
case 310:
case 1969:
case 3031:
case 206:
case 1603:
case 3333:
case 2637:
case 3599:
case 1894:
case 2950:
case 3227:
case 205:
case 3626:
case 3284:
case 3035:
case 1218:
case 2223:
case 1682:
case 273:
case 1463:
case 1985:
case 1862:
case 416:
case 3488:
case 22:
case 862:
case 1427:
case 2886:
case 1414:
case 2267:
case 3377:
case 2666:
case 2445:
case 2373:
case 3263:
case 3920:
case 3509:
case 755:
case 2530:
case 1539:
case 2441:
case 2356:
case 2075:
case 1333:
case 911:
case 2119:
case 3852:
case 2206:
case 3303:
case 2607:
case 1110:
case 2161:
case 3981:
case 3001:
case 2189:
case 3046:
case 918:
case 110:
case 1898:
case 2307:
case 444:
case 1035:
case 1284:
case 1326:
case 3985:
case 3463:
case 2165:
case 81:
case 3862:
case 3476:
case 3288:
case 694:
case 3612:
case 1755:
case 557:
case 1570:
case 1227:
case 3382:
case 1719:
case 2245:
case 3959:
case 2822:
case 1276:
case 1263:
case 1488:
case 3095:
case 217:
case 364:
case 3427:
case 1377:
case 4061:
case 2436:
case 119:
case 1808:
case 3838:
case 3091:
case 251:
case 2296:
case 1920:
case 3804:
case 3747:
case 3121:
case 3539:
case 2500:
case 2929:
case 992:
case 3280:
case 123:
case 3421:
case 40:
case 1371:
case 1723:
case 2395:
case 320:
case 851:
case 3745:
case 2940:
case 2992:
case 1671:
case 2870:
case 2695:
case 204:
case 463:
case 3574:
case 2788:
case 3706:
case 55:
case 95:
case 1188:
case 659:
case 2899:
case 589:
case 1443:
case 2691:
case 3114:
case 1890:
case 1675:
case 3097:
case 3184:
case 1056:
case 3425:
case 2123:
case 2451:
case 2301:
case 2508:
case 2346:
case 3243:
case 136:
case 2534:
case 3917:
case 414:
case 754:
case 650:
case 3176:
case 84:
case 4036:
case 2465:
case 3163:
case 1225:
case 425:
case 343:
case 1522:
case 135:
case 2605:
case 548:
case 2489:
case 2157:
case 329:
case 2012:
case 941:
case 1410:
case 165:
case 2714:
case 695:
case 2727:
case 3671:
case 921:
case 2219:
case 2141:
case 2106:
case 3949:
case 1421:
case 1280:
case 323:
case 3371:
case 430:
case 2261:
case 2784:
case 120:
case 2077:
case 2289:
case 1184:
case 1097:
case 82:
case 262:
case 2594:
case 2251:
case 3188:
case 446:
case 2552:
case 2145:
case 1127:
case 1917:
case 653:
case 3800:
case 2631:
case 1830:
case 3225:
case 2504:
case 3037:
case 3928:
case 2753:
case 2331:
case 1243:
case 227:
case 873:
case 336:
case 37:
case 1586:
case 365:
case 439:
case 806:
case 3480:
case 3221:
case 2763:
case 3522:
case 4045:
case 335:
case 469:
case 2817:
case 2101:
case 3061:
case 2824:
case 3883:
case 795:
case 116:
case 23:
case 3663:
case 3520:
case 3676:
case 3813:
case 275:
case 3019:
case 124:
case 2266:
case 3376:
case 2273:
case 3051:
case 2357:
case 115:
case 2407:
case 276:
case 4091:
case 1832:
case 3065:
case 2657:
case 1701:
case 3353:
case 2256:
case 2105:
case 4046:
case 2195:
case 1559:
case 1171:
case 3840:
case 3854:
case 2775:
case 1515:
case 4001:
case 753:
case 1585:
case 1858:
case 3233:
case 2336:
case 1047:
case 2025:
case 1203:
case 1388:
case 3864:
case 1618:
case 1282:
case 3314:
case 4005:
case 1212:
case 1688:
case 3999:
case 1868:
case 3384:
case 1318:
case 2323:
case 3627:
case 2828:
case 291:
case 778:
case 1055:
case 1376:
case 952:
case 2900:
case 3705:
case 1061:
case 316:
case 298:
case 1909:
case 771:
case 200:
case 1277:
case 1676:
case 2297:
case 3433:
case 1731:
case 78:
case 1065:
case 477:
case 1353:
case 419:
case 759:
case 402:
case 2437:
case 172:
case 2548:
case 1892:
case 3171:
case 4031:
case 1854:
case 1970:
case 597:
case 997:
case 2979:
case 2043:
case 3515:
case 654:
case 584:
case 3688:
case 1999:
case 3511:
case 1384:
case 3868:
case 2942:
case 1627:
case 144:
case 4035:
case 1614:
case 3388:
case 1684:
case 3282:
case 1314:
case 3477:
case 3916:
case 809:
case 2201:
case 3177:
case 4037:
case 2647:
case 242:
case 126:
case 3797:
case 1036:
case 488:
case 466:
case 3986:
case 2173:
case 2347:
case 3006:
case 812:
case 2793:
case 1321:
case 1766:
case 1773:
case 2908:
case 601:
case 3045:
case 608:
case 339:
case 2583:
case 1023:
case 787:
case 2934:
case 47:
case 2156:
case 1829:
case 133:
case 3380:
case 2137:
case 2295:
case 10:
case 3610:
case 1067:
case 330:
case 2712:
case 163:
case 2782:
case 4066:
case 4073:
case 2435:
case 3860:
case 3133:
case 3310:
case 1103:
case 449:
case 3974:
case 3707:
case 1549:
case 4056:
case 3844:
case 1112:
case 1275:
case 2291:
case 2554:
case 3126:
case 2592:
case 1737:
case 800:
case 1643:
case 1006:
case 267:
case 3325:
case 1916:
case 4007:
case 1343:
case 2231:
case 326:
case 2532:
case 3625:
case 3621:
case 2235:
case 693:
case 429:
case 1517:
case 3829:
case 3773:
case 5:
case 3193:
case 1680:
case 363:
case 531:
case 931:
case 2319:
case 656:
case 1310:
case 2869:
case 2076:
case 568:
case 2063:
case 1380:
case 333:
case 876:
case 2361:
case 561:
case 2619:
case 2107:
case 30:
case 2811:
case 2952:
case 2655:
case 2389:
case 538:
case 1850:
case 1707:
case 1974:
case 2815:
case 1844:
case 3112:
case 83:
case 2053:
case 585:
case 1126:
case 655:
case 1096:
case 2401:
case 86:
case 3057:
case 2446:
case 2665:
case 2962:
case 2885:
case 2733:
case 1213:
case 3070:
case 255:
case 397:
case 622:
case 4011:
case 1947:
case 3535:
case 3720:
case 1877:
case 3232:
case 3604:
case 1546:
case 3531:
case 3129:
case 3338:
case 1501:
case 72:
case 1202:
case 4015:
case 3893:
case 3440:
case 3304:
case 4085:
case 1608:
case 1785:
case 3258:
case 705:
case 1698:
case 516:
case 916:
case 2169:
case 3989:
case 3402:
case 3394:
case 1292:
case 1240:
case 1759:
case 3919:
case 3652:
case 2249:
case 3694:
case 773:
case 3955:
case 2115:
case 3268:
case 1711:
case 2378:
case 1150:
case 3362:
case 706:
case 2417:
case 1769:
case 2185:
case 2760:
case 3483:
case 3882:
case 1781:
case 3662:
case 2729:
case 1464:
case 2217:
case 1535:
case 2386:
case 1720:
case 751:
case 3213:
case 418:
case 1070:
case 758:
case 2287:
case 2686:
case 184:
case 197:
case 2866:
case 2472:
case 1304:
case 1492:
case 1440:
case 1099:
case 2042:
case 3334:
case 544:
case 1232:
case 1604:
case 2120:
case 3546:
case 3308:
case 1531:
case 717:
case 3501:
case 1338:
case 3202:
case 779:
case 3292:
case 201:
case 770:
case 1919:
case 2910:
case 3715:
case 674:
case 1955:
case 1694:
case 3785:
case 3833:
case 1258:
case 3432:
case 152:
case 1961:
case 1352:
case 1009:
case 1402:
case 2374:
case 1148:
case 1882:
case 3781:
case 1951:
case 3144:
case 1812:
case 2674:
case 1413:
case 4020:
case 3595:
case 3826:
case 3450:
case 2339:
case 3444:
case 533:
case 3300:
case 19:
case 1330:
case 90:
case 2702:
case 1448:
case 1556:
case 3600:
case 2831:
case 2098:
case 368:
case 1630:
case 386:
case 801:
case 3996:
case 4072:
case 2783:
case 3460:
case 3229:
case 71:
case 3074:
case 1573:
case 254:
case 3787:
case 808:
case 2713:
case 1728:
case 890:
case 899:
case 1260:
case 1022:
case 2764:
case 747:
case 1936:
case 1154:
case 3871:
case 1140:
case 1192:
case 2211:
case 3679:
case 1749:
case 3168:
case 448:
case 2008:
case 2754:
case 691:
case 1537:
case 698:
case 2503:
case 600:
case 1164:
case 3342:
case 704:
case 2285:
case 131:
case 3448:
case 2801:
case 1600:
case 2117:
case 3556:
case 2609:
case 960:
case 560:
case 2846:
case 3630:
case 2976:
case 428:
case 3113:
case 1300:
case 39:
case 930:
case 3967:
case 2094:
case 2187:
case 945:
case 545:
case 3566:
case 1074:
case 1787:
case 2953:
case 185:
case 3728:
case 1996:
case 2220:
case 1460:
case 3102:
case 946:
case 1229:
case 727:
case 1941:
case 3154:
case 2526:
case 1871:
case 2670:
case 2768:
case 1086:
case 483:
case 3260:
case 1158:
case 676:
case 3429:
case 2004:
case 63:
case 3164:
case 2984:
case 539:
case 939:
case 603:
case 1390:
case 1507:
case 1:
case 3250:
case 969:
case 2927:
case 2891:
case 675:
case 3358:
case 1692:
case 1438:
case 3252:
case 3551:
case 564:
case 2649:
case 3658:
case 1392:
case 1354:
case 534:
case 934:
case 3020:
case 3589:
case 1664:
case 1884:
case 3561:
case 253:
case 3555:
case 3888:
case 1364:
case 627:
case 2486:
case 3519:
case 2672:
case 913:
case 3100:
case 1313:
case 2328:
case 2060:
case 1901:
case 1946:
case 2222:
case 3931:
case 296:
case 1130:
case 1462:
case 776:
case 2474:
case 1613:
case 311:
case 1011:
case 1383:
case 357:
case 3332:
case 1015:
case 1452:
case 73:
case 3238:
case 1853:
case 1302:
case 2525:
case 3204:
case 3632:
case 2896:
case 3709:
case 1547:
case 3935:
case 1905:
case 3498:
case 1234:
case 1602:
case 3404:
case 1565:
case 1358:
case 4009:
case 2836:
case 3995:
case 3654:
case 2742:
case 1408:
case 3438:
case 519:
case 919:
case 2274:
case 3364:
case 577:
case 61:
case 1668:
case 1770:
case 3827:
case 3991:
case 1142:
case 1589:
case 3664:
case 3884:
case 2823:
case 2422:
case 894:
case 502:
case 1262:
case 2580:
case 2324:
case 111:
case 2286:
case 259:
case 2867:
case 1100:
case 2216:
case 497:
case 2624:
case 1931:
case 2109:
case 910:
case 3130:
case 3863:
case 3876:
case 2048:
case 1935:
case 1709:
case 2700:
case 3739:
case 3234:
case 3602:
case 157:
case 604:
case 1332:
case 2543:
case 3015:
case 1238:
case 3853:
case 2381:
case 2013:
case 1937:
case 2819:
case 581:
case 878:
case 3279:
case 1810:
case 2369:
case 3907:
case 3774:
case 2681:
case 3017:
case 2311:
case 2083:
case 2669:
case 1198:
case 180:
case 988:
case 2903:
case 2798:
case 1344:
case 88:
case 3430:
case 540:
case 2409:
case 535:
case 2685:
case 97:
case 57:
case 3506:
case 2851:
case 2912:
case 679:
case 2615:
case 1644:
case 1536:
case 565:
case 2659:
case 3541:
case 3200:
case 523:
case 1557:
case 774:
case 328:
case 1230:
case 670:
case 2122:
case 3825:
case 2040:
case 2092:
case 321:
case 949:
case 2054:
case 549:
case 294:
case 1490:
case 1442:
case 1049:
case 1966:
case 1973:
case 1108:
case 2993:
case 189:
case 15:
case 2064:
case 3997:
case 3104:
case 1722:
case 1134:
case 1956:
case 3716:
case 1017:
case 3880:
case 1024:
case 3778:
case 2584:
case 895:
case 1545:
case 3028:
case 2514:
case 1087:
case 1194:
case 1279:
case 3810:
case 1152:
case 341:
case 2794:
case 1348:
case 929:
case 2299:
case 3644:
case 2926:
case 1290:
case 1242:
case 3536:
case 896:
case 1648:
case 3400:
case 543:
case 3344:
case 2439:
case 1162:
case 4:
case 468:
case 2553:
case 2738:
case 486:
case 3442:
case 3490:
case 3049:
case 853:
case 3973:
case 2058:
case 673:
case 3557:
case 3230:
case 2209:
case 2704:
case 1596:
case 1825:
case 1997:
case 3722:
case 1104:
case 3134:
case 4074:
case 767:
case 1629:
case 2068:
case 737:
case 1138:
case 1329:
case 2432:
case 2160:
case 2833:
case 193:
case 3980:
case 1181:
case 3000:
case 885:
case 639:
case 2698:
case 308:
case 3748:
case 975:
case 575:
case 2591:
case 3910:
case 2715:
case 2398:
case 669:
case 1249:
case 831:
case 3674:
case 2144:
case 2150:
case 713:
case 1378:
case 1571:
case 2826:
case 1487:
case 1159:
case 868:
case 1272:
case 861:
case 1417:
case 1424:
case 976:
case 576:
case 838:
case 1760:
case 2781:
case 1228:
case 3943:
case 3686:
case 3287:
case 3866:
case 3472:
case 4060:
case 3873:
case 3217:
case 3729:
case 3616:
case 2505:
case 3224:
case 1622:
case 2283:
case 2877:
case 1925:
case 1897:
case 156:
case 2458:
case 2308:
case 660:
case 2546:
case 3120:
case 2501:
case 645:
case 399:
case 3042:
case 3090:
case 734:
case 2334:
case 101:
case 991:
case 2919:
case 1910:
case 2652:
case 3750:
case 3249:
case 3111:
case 3181:
case 2009:
case 900:
case 500:
case 3169:
case 998:
case 2803:
case 598:
case 3678:
case 3424:
case 626:
case 2148:
case 2882:
case 3185:
case 3760:
case 2965:
case 2662:
case 1674:
case 1428:
case 3115:
case 2951:
case 3378:
case 614:
case 450:
case 2362:
case 3272:
case 777:
case 1217:
case 1616:
case 1224:
case 1386:
case 3622:
case 2535:
case 2720:
case 702:
case 284:
case 1943:
case 1866:
case 1873:
case 297:
case 2440:
case 2893:
case 509:
case 2099:
case 909:
case 633:
case 4048:
case 1042:
case 478:
case 2232:
case 512:
case 1420:
case 1281:
case 1582:
case 4013:
case 2154:
case 4083:
case 3670:
case 3526:
case 2140:
case 1149:
case 1211:
case 1512:
case 2250:
case 2749:
case 574:
case 3699:
case 1008:
case 3038:
case 3891:
case 1259:
case 1740:
case 1792:
case 2537:
case 749:
case 3399:
case 3984:
case 2923:
case 182:
case 884:
case 897:
case 1034:
case 3415:
case 2113:
case 3052:
case 29:
case 3187:
case 3094:
case 740:
case 77:
case 3117:
case 487:
case 3801:
case 3609:
case 1831:
case 4054:
case 3963:
case 3976:
case 3732:
case 3481:
case 3220:
case 3577:
case 1835:
case 1783:
case 2078:
case 3469:
case 3062:
case 154:
case 607:
case 3953:
case 2728:
case 2941:
case 1670:
case 615:
case 2871:
case 567:
case 3211:
case 1768:
case 2086:
case 2016:
case 3281:
case 3420:
case 1370:
case 3582:
case 537:
case 3764:
case 2248:
case 1004:
case 616:
case 3918:
case 1533:
case 1758:
case 3285:
case 2:
case 624:
case 1699:
case 2642:
case 1891:
case 1038:
case 3259:
case 1914:
case 720:
case 2945:
case 3792:
case 3740:
case 3702:
case 231:
case 1117:
case 2600:
case 1846:
case 1609:
case 3831:
case 3098:
case 286:
case 1963:
case 2597:
case 1732:
case 1976:
case 261:
case 3339:
case 2300:
case 2444:
case 3128:
case 1094:
case 1187:
case 2074:
case 354:
case 285:
case 1220:
case 1577:
case 3835:
case 2132:
case 1805:
case 2717:
case 2229:
case 4068:
case 2313:
case 1328:
case 2081:
case 3216:
case 2901:
case 3478:
case 506:
case 1222:
case 2069:
case 2683:
case 1521:
case 2876:
case 2462:
case 2130:
case 196:
case 2613:
case 1628:
case 3324:
case 3286:
case 2383:
case 2011:
case 3867:
case 359:
case 1050:
case 3543:
case 1044:
case 2208:
case 505:
case 371:
case 2494:
case 1525:
case 3048:
case 2547:
case 378:
case 1730:
case 3700:
case 973:
case 2640:
case 2692:
case 4030:
case 1971:
case 2995:
case 2654:
case 629:
case 52:
case 2340:
case 643:
case 1349:
case 2664:
case 1416:
case 350:
case 2884:
case 3029:
case 153:
case 2364:
case 3199:
case 3779:
case 828:
case 1672:
case 1845:
case 2814:
case 3474:
case 1317:
case 1324:
case 848:
case 1867:
case 159:
case 4079:
case 1624:
case 3222:
case 396:
case 218:
case 2632:
case 1048:
case 2204:
case 178:
case 3730:
case 2935:
case 2498:
case 1857:
case 3050:
case 2332:
case 395:
case 171:
case 880:
case 889:
case 635:
case 2658:
case 2565:
case 744:
case 3349:
case 408:
case 665:
case 2408:
case 2252:
case 979:
case 917:
case 2888:
case 636:
case 551:
case 2519:
case 681:
case 3975:
case 3845:
case 2190:
case 558:
case 666:
case 1422:
case 2818:
case 707:
case 1580:
case 1029:
case 3058:
case 3116:
case 1239:
case 725:
case 2230:
case 1122:
case 1499:
case 2442:
case 892:
case 2490:
case 2966:
case 3186:
case 904:
case 2567:
case 1470:
case 3068:
case 547:
case 3563:
case 3620:
case 610:
case 2956:
case 2134:
case 454:
case 3514:
case 1381:
case 1611:
case 1369:
case 2810:
case 677:
case 1855:
case 1588:
case 3933:
case 3762:
case 602:
case 2660:
case 1311:
case 1083:
case 2198:
case 1178:
case 2400:
case 1798:
case 1865:
case 248:
case 1982:
case 4008:
case 1912:
case 1851:
case 2650:
case 241:
case 3794:
case 2644:
case 3752:
case 3299:
case 3174:
case 3926:
case 818:
case 221:
case 3040:
case 739:
case 3054:
case 1738:
case 1553:
case 3708:
case 4094:
case 2200:
case 1847:
case 228:
case 3122:
case 1704:
case 1620:
case 1576:
case 2716:
case 2629:
case 962:
case 3993:
case 1320:
case 3470:
case 1068:
case 2786:
case 932:
case 2329:
case 2138:
case 1933:
case 283:
case 1762:
case 2024:
case 3311:
case 3889:
case 3903:
case 1514:
case 2545:
case 1270:
case 3611:
case 2194:
case 927:
case 3588:
case 2907:
case 3851:
case 3912:
case 664:
case 2348:
case 2506:
case 1174:
case 4004:
case 634:
case 2648:
case 3178:
case 4038:
case 1032:
case 3798:
case 3409:
case 2162:
case 1071:
case 1886:
case 2427:
case 317:
case 1445:
case 379:
case 2414:
case 46:
case 234:
case 3423:
case 475:
case 1366:
case 1147:
case 1725:
case 2121:
case 358:
case 1530:
case 2747:
case 2539:
case 953:
case 3500:
case 3436:
case 2693:
case 1441:
case 3743:
case 2838:
case 1075:
case 1356:
case 1406:
case 820:
case 1496:
case 2981:
case 1960:
case 3189:
case 3457:
case 2046:
case 106:
case 3241:
case 1637:
case 1236:
case 3590:
case 3155:
case 2852:
case 3607:
case 2894:
case 1874:
case 1950:
case 3710:
case 2915:
case 1944:
case 3151:
case 3579:
case 621:
case 34:
case 105:
case 2382:
case 3245:
case 370:
case 628:
case 3878:
case 2218:
case 1223:
case 2862:
case 2463:
case 4010:
case 3816:
case 3366:
case 2677:
case 3373:
case 3147:
case 3071:
case 400:
case 641:
case 4080:
case 117:
case 32:
case 2377:
case 3666:
case 3673:
case 3267:
case 1397:
case 3441:
case 2808:
case 1743:
case 219:
case 3356:
case 2253:
case 1697:
case 3725:
case 680:
case 2509:
case 950:
case 3530:
case 202:
case 3656:
case 2834:
case 797:
case 1542:
case 1155:
case 58:
case 2751:
case 840:
case 3337:
case 3496:
case 1161:
case 4043:
case 2633:
case 87:
case 2765:
case 2180:
case 865:
case 1457:
case 1307:
case 1948:
case 170:
case 2789:
case 2284:
case 3223:
case 1165:
case 836:
case 3950:
case 3874:
case 1710:
case 1579:
case 1151:
case 412:
case 305:
case 14:
case 571:
case 2626:
case 2227:
case 442:
case 1451:
case 2037:
case 1508:
case 1167:
case 236:
case 327:
case 1534:
case 692:
case 2800:
case 2757:
case 3839:
case 1646:
case 1465:
case 288:
case 1247:
case 1003:
case 266:
case 2225:
case 3932:
case 3635:
case 2522:
case 79:
case 1082:
case 235:
case 240:
case 474:
case 4018:
case 2767:
case 3335:
case 1419:
case 810:
case 2410:
case 1455:
case 3562:
case 3261:
case 1395:
case 1718:
case 2371:
case 3784:
case 2578:
case 3289:
case 1940:
case 1695:
case 3141:
case 1954:
case 1136:
case 2879:
case 587:
case 104:
case 657:
case 3106:
case 3255:
case 2073:
case 1788:
case 2066:
case 2949:
case 994:
case 1093:
case 3594:
case 3968:
case 3145:
case 1691:
case 2443:
case 618:
case 3447:
case 362:
case 3265:
case 2118:
case 2924:
case 2830:
case 3809:
case 2163:
case 3247:
case 2176:
case 1631:
case 1504:
case 437:
case 1753:
case 3301:
case 1538:
case 2243:
case 2987:
case 3508:
case 1331:
case 127:
case 31:
case 1026:
case 786:
case 1763:
case 243:
case 1776:
case 1932:
case 4027:
case 4014:
case 1196:
case 3605:
case 738:
case 3082:
case 3157:
case 3954:
case 4063:
case 1219:
case 3695:
case 3136:
case 1727:
case 2210:
case 1106:
case 304:
case 2280:
case 7:
case 2421:
case 3718:
case 1261:
case 3395:
case 1784:
case 1077:
case 1289:
case 4053:
case 2184:
case 3598:
case 1265:
case 2425:
case 3093:
case 2706:
case 1251:
case 1594:
case 1552:
case 2114:
case 132:
case 3691:
case 1145:
case 2741:
case 347:
case 2127:
case 1636:
case 555:
case 2559:
case 955:
case 1237:
case 3641:
case 1195:
case 2791:
case 1775:
case 2515:
case 3606:
case 3207:
case 1497:
case 2858:
case 2585:
case 2203:
case 3306:
case 2388:
case 668:
case 686:
case 556:
case 2569:
case 956:
case 2618:
case 1623:
case 631:
case 3345:
case 312:
case 2212:
case 309:
case 473:
case 1771:
case 2795:
case 2318:
case 661:
case 3990:
case 1191:
case 3645:
case 3466:
case 1101:
case 42:
case 3080:
case 1817:
case 3529:
case 993:
case 2939:
case 593:
case 216:
case 398:
case 4071:
case 175:
case 3010:
case 6:
case 224:
case 1266:
case 846:
case 3437:
case 2293:
case 1357:
case 1407:
case 2832:
case 2433:
case 2701:
case 845:
case 830:
case 1105:
case 3497:
case 3336:
case 1341:
case 1306:
case 1548:
case 3025:
case 2840:
case 2892:
case 3195:
case 2493:
case 3237:
case 3775:
case 792:
case 3544:
case 1979:
case 1849:
case 207:
case 109:
case 69:
case 2999:
case 3771:
case 244:
case 1942:
case 470:
case 2226:
case 1466:
case 1872:
case 826:
case 2614:
case 44:
case 3021:
case 2327:
case 3623:
case 1345:
case 814:
case 191:
case 2813:
case 375:
case 901:
case 3887:
case 2376:
case 3667:
case 303:
case 1529:
case 1080:
case 3824:
case 1900:
case 2482:
case 990:
case 2883:
case 590:
case 198:
case 2735:
case 3367:
case 2676:
case 1131:
case 2089:
case 2277:
case 100:
case 508:
case 833:
case 711:
case 80:
case 3657:
case 2403:
case 2653:
case 3357:
case 3407:
case 233:
case 2271:
case 1137:
case 3619:
case 3811:
case 3952:
case 20:
case 748:
case 3568:
case 3389:
case 3655:
case 3994:
case 3881:
case 1435:
case 3661:
case 3405:
case 2103:
case 1998:
case 3063:
case 3355:
case 1703:
case 2848:
case 447:
case 2978:
case 3446:
case 3665:
case 3885:
case 3733:
case 2182:
case 684:
case 3651:
case 954:
case 2549:
case 3815:
case 697:
case 1554:
case 3365:
case 1291:
case 2275:
case 3053:
case 3859:
case 780:
case 1592:
case 789:
case 2756:
case 75:
case 41:
case 844:
case 2625:
case 3532:
case 1347:
case 1173:
case 1793:
case 2325:
case 367:
case 214:
case 2773:
case 872:
case 174:
case 225:
case 3938:
case 3014:
case 1513:
case 1820:
case 3777:
case 3084:
case 2023:
case 1018:
case 4012:
case 582:
case 652:
case 2680:
case 3435:
case 3782:
case 1405:
case 3998:
case 1063:
case 1355:
case 1619:
case 3137:
case 1726:
case 1952:
case 1811:
case 230:
case 1389:
case 1651:
case 462:
case 2850:
case 2844:
case 3291:
case 3554:
case 1053:
case 1351:
case 432:
case 1401:
case 824:
case 1446:
case 1665:
case 122:
case 3431:
case 1558:
case 246:
case 1885:
case 2041:
case 2475:
case 4033:
case 3173:
case 3347:
case 2916:
case 427:
case 2343:
case 3246:
case 2177:
case 3820:
case 1904:
case 4026:
case 1777:
case 3583:
case 1084:
case 3156:
case 3934:
case 269:
case 3908:
case 2471:
case 1938:
case 1014:
case 3513:
case 2045:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757772001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,];
var gg_b = "1757772001/";

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
